const qualApp = require('express').Router();
const DatabaseQual = require('./Database').Qualification;
const USERS = require('./Users');

const findMistakes = async (login, id, userAnswer) => {
   const role = await USERS.getRole(login);
   const answer = await DatabaseQual.getAnswer(role, id);
   let mistakes = [];
   let result = {
      answer
   };

   if (answer != undefined) {
      for (let i = 0; i < answer.length; i++) {
         if (answer[i] != userAnswer[i]) mistakes[i] = true;
         else mistakes[i] = false;
      }
   }

   result.mistakes = mistakes;

   return result;
};

const ifSolvedQuestion = async (login, role, id) => {
   const user = await USERS.findUser(login);

   if (user.qualification == undefined || !user.qualification.answers[id]) {
      return false;
   }

   const solved = {};
   let userData = user.qualification.answers[id] == undefined ? false : user.qualification.answers[id];
   const answer = await DatabaseQual.getAnswer(role, id);

   if (!answer) {
      solved.answer = userData.data;
   } else {
      solved.answer = answer;
      solved.mistakes = userData.mistakes && userData.mistakes.some(e => e) ? userData.mistakes : undefined;
   }
   return solved;
};

const getNextQuestion = async (login, questions) => {
   const result = { now: 0, solved: 0, successSolved: 0 };
   if (questions.length == 0) {
      result.now = -1;
      return result;
   }
   const user = await USERS.findUser(login);
   let c = true;
   if (user.qualification != undefined) {
      for (let i = 0; i < questions.length; i++) {
         if (c && (user.qualification.answers[i] == undefined || (user.qualification.answers[i] != undefined && user.qualification.answers[i].mistakes == undefined))) {
            result.now = i;
            c = false;
         }
         if (user.qualification.answers[i] != undefined && user.qualification.answers[i].mark == 'error') result.solved++;
         if (user.qualification.answers[i] != undefined && user.qualification.answers[i].mark == 'success') {
            result.successSolved++;
            result.solved++;
         }
      }
   }
   return result;
};

const getQuestionsList = (allQuestions, qual) => {
   return allQuestions.map((e, i) => {
      return {
         name: e.name,
         mark: qual && qual.answers[i] ? qual.answers[i].mark : undefined
      };
   });
};

module.exports = app => {
   qualApp.get('/qualification', async (req, res) => {
      const role = await USERS.getRole(req.session.login);
      const questions = await DatabaseQual.getAllQuestion(role);

      let result = await getNextQuestion(req.session.login, questions);

      return app.render(req, res, '/mainQualification', { countQuest: questions.length, now: result.now, solved: result.solved, successSolved: result.successSolved });
   });

   qualApp.delete('/qualification', async (req, res) => {
      USERS.deleteQualAnswer(req.session.login);
      return res.send(JSON.stringify({ now: 0, solved: 0, successSolved: 0 }));
   });

   qualApp.get('/qualification/:id', async (req, res) => {
      const user = await USERS.findUser(req.session.login);
      const role = user.role;
      const allQuestion = await DatabaseQual.getAllQuestion(role);

      if (req.params.id >= allQuestion.length) {
         return res.redirect('/qualification');
      }

      const params = { id: Number(req.params.id) + 1 };

      if (Number(req.params.id) + 1 < allQuestion.length) {
         params.nextQuestion = Number(req.params.id) + 1;
      }

      if (req.params.id > 0) {
         params.backQuestion = Number(req.params.id) - 1;
      }

      params.question = await DatabaseQual.getQuestion(role, req.params.id);
      params.questionsList = getQuestionsList(allQuestion, user.qualification);

      if (!user.qualification || !user.qualification.answers[req.params.id]) return app.render(req, res, '/qualification', params);

      if (user.qualification.answers[req.params.id].checked) params.solved = await ifSolvedQuestion(req.session.login, role, req.params.id);
      else params.savedData = user.qualification.answers[req.params.id].data;

      return app.render(req, res, '/qualification', params);
   });

   qualApp.post('/qualification/:id', async (req, res) => {
      const userAnswer = req.body.answer;

      let result = await findMistakes(req.session.login, req.params.id, userAnswer);
      let next = await USERS.setQualAnswer(req.session.login, req.params.id, userAnswer, result.mistakes);

      if (next) {
         return res.send(JSON.stringify({ solved: { mistakes: result.mistakes.some(e => e) ? result.mistakes : undefined, answer: result.answer ? result.answer : userAnswer } }));
      }

      return res.send(JSON.stringify({}));
   });

   qualApp.put('/qualification/:id', async (req, res) => {
      const userAnswer = req.body.answer;

      await USERS.saveQualAnswer(req.session.login, req.params.id, userAnswer);

      return res.send(JSON.stringify({}));
   });

   return qualApp;
};
