const qualApp = require('express').Router();
const DatabaseQual = require('./Database').Qualification;
const USERS = require('./Users');

const findMistakes = async (login, id, userAnswer) => {
   const role = await USERS.getRole(login);
   const answer = await DatabaseQual.getAnswer(role, id);
   let result = {
      answer,
      userAnswer
   };

   if (answer == undefined) {
      return result;
   }
   let mistakes = [];
   for (let i = 0; i < answer.length; i++) {
      if (answer[i] != userAnswer[i]) mistakes[i] = true;
      else mistakes[i] = false;
   }

   if (mistakes.length == 0) {
      result.mistake = false;
   } else {
      result.mistakes = mistakes;
      result.mistake = true;
   }
   return result;
};

const ifLastQuestion = async (next, role) => {
   const allQuestion = await DatabaseQual.getAllQuestion(role);
   return next >= allQuestion.length;
};

const ifSolvedQuestion = async (login, role, id) => {
   const user = await USERS.findUser(login);

   if (user.qualification == undefined) {
      return false;
   }

   const solved = {};
   let userData = user.qualification.answers[id] == undefined ? false : user.qualification.answers[id];
   const answer = await DatabaseQual.getAnswer(role, id);

   if (!answer) {
      solved.answer = userData.data;
      return solved;
   }

   solved.answer = answer;
   solved.mistakes = userData.mistakes;

   return solved;
};

const getNextQuestion = async (login, questions) => {
   const user = await USERS.findUser(login);
   if (user.qualification != undefined) {
      if (questions.length == 0) return -1;
      for (let i = 0; i < questions.length; i++) {
         if (user.qualification.answers[i] == undefined) return i;
      }
   }
   return 0;
};

module.exports = app => {
   qualApp.get('/qualification', async (req, res) => {
      const role = await USERS.getRole(req.session.login);
      const questions = await DatabaseQual.getAllQuestion(role);

      let now = await getNextQuestion(req.session.login, questions);
      // if(now == -1)
      return app.render(req, res, '/startQualification', { countQuest: questions.length, now });
   });

   qualApp.get('/qualification/:id', async (req, res) => {
      const role = await USERS.getRole(req.session.login);

      if (await ifLastQuestion(req.params.id, role)) {
         return res.redirect('/qualification');
      }

      const params = {};

      if (!(await ifLastQuestion(req.params.id + 1, role))) {
         params.nextQuestion = Number(req.params.id) + 1;
      }

      params.question = await DatabaseQual.getQuestion(role, req.params.id);
      params.solved = await ifSolvedQuestion(req.session.login, role, req.params.id);

      return app.render(req, res, '/qualification', params);
   });

   qualApp.post('/qualification/:id', async (req, res) => {
      const userAnswer = req.body.answer;

      let result = await findMistakes(req.session.login, req.params.id, userAnswer);
      let next = await USERS.setQualAnswer(req.session.login, req.params.id, userAnswer, result.mistakes);

      if (next) {
         return res.send(JSON.stringify({ solved: { mistakes: result.mistakes, answer: result.answer } }));
      }

      return res.send(JSON.stringify({}));
   });

   return qualApp;
};
