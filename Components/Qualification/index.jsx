/* eslint-disable max-len */
import React, { Component } from 'react';
import {
   GlobalStyle_,
   Qualification_,
   Form_,
   Title_,
   AnswerChoices_,
   CheckBox_,
   CustomCheckBox_,
   Label_,
   Dot_,
   Send_,
   Container_,
   Error_,
   Link_,
   ShowQuestions_,
   Ico_,
   QuestionsList_,
   Question_,
   GoToMain_,
   Code_
} from './StyledComponents';

class Qualification extends Component {
   state = {
      solved: this.props.solved,
      questionsList: this.props.questionsList
   };

   answer = [];

   render() {
      const { name, code } = this.props.question;
      const { nextQuestion, backQuestion, id } = this.props;
      const { solved, questionsList } = this.state;
      return (
         <Qualification_>
            <GlobalStyle_ />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <ShowQuestions_
               onClick={() => {
                  this.questionsList.classList.toggle('hiden');
               }}
            >
               <Ico_ className="fa fa-list-alt" />
            </ShowQuestions_>
            <Link_ href="/">
               <GoToMain_>
                  <Ico_ className="fa fa-home" />
               </GoToMain_>
            </Link_>
            <QuestionsList_ className="hiden" ref={e => (this.questionsList = e)}>
               {questionsList.map((e, i) => (
                  <Link_ key={i} href={`/qualification/${i}`}>
                     <Question_ className={e.name == name ? 'active' : ''}>
                        {i + 1 + '. ' + e.name}
                        {this.getQuestionIco(e.mark)}
                     </Question_>
                  </Link_>
               ))}
            </QuestionsList_>
            {solved && solved.mistakes ? <Error_> Mistakes </Error_> : ''}
            <Form_
               onSubmit={async e => {
                  e.preventDefault();
                  if (solved) {
                     window.location.replace(nextQuestion ? `/qualification/${nextQuestion}` : '/qualification');
                  }

                  for (let i = 0; i < this.props.question.answerChoices.length; i++) {
                     if (this.answer[i] === undefined) this.answer[i] = false;
                  }
                  await fetch(window.location.href, {
                     method: 'POST',
                     body: JSON.stringify({ answer: this.answer }),
                     headers: { 'content-type': 'application/json' }
                  }).then(response => {
                     response.json().then(res => {
                        if (res.solved) {
                           this.setState({ solved: res.solved, questionsList: res.questionsList });
                        }
                     });
                  });

                  return false;
               }}
            >
               <Title_>
                  {id + '. ' + name}
                  {solved ? ' ( checked )' : ''}
               </Title_>
               {code ? code.map((e, i) => <Code_ key={i}>{e}</Code_>) : ''}
               <AnswerChoices_>{solved ? this.createStaticAnswer() : this.createAnswerChoices()}</AnswerChoices_>
               <Container_>
                  <Link_ href={backQuestion != undefined ? `/qualification/${backQuestion}` : '/qualification'}>
                     <Send_ className="ico" type="button">
                        <Ico_ className="fa fa-chevron-left left" />
                     </Send_>
                  </Link_>
                  {!solved
                     ? [
                          <Send_
                             key="1"
                             type="button"
                             onClick={e => {
                                e.preventDefault();

                                this.saveData();

                                return false;
                             }}
                          >
                             save
                          </Send_>,
                          <Send_ key="2" type="submit">
                             check
                          </Send_>
                       ]
                     : ''}
                  <Link_ href={nextQuestion ? `/qualification/${nextQuestion}` : '/qualification'}>
                     <Send_ className="ico" type="button">
                        <Ico_ className="fa fa-chevron-right right" />
                     </Send_>
                  </Link_>
               </Container_>
            </Form_>
         </Qualification_>
      );
   }

   saveData() {
      for (let i = 0; i < this.props.question.answerChoices.length; i++) {
         if (this.answer[i] === undefined) this.answer[i] = false;
      }
      fetch(window.location.href, {
         method: 'PUT',
         body: JSON.stringify({ answer: this.answer }),
         headers: { 'content-type': 'application/json' }
      });
   }

   getQuestionIco(mark) {
      let res;
      switch (mark) {
         case 'error': {
            res = <Ico_ className="fa fa-times error" />;
            break;
         }
         case 'success': {
            res = <Ico_ className="fa fa-check success" />;
            break;
         }
      }
      return res;
   }

   createStaticAnswer() {
      const { answerChoices, type } = this.props.question;
      const { solved } = this.state;

      if (type == 'radio' || type == 'checkbox') {
         return answerChoices.map((e, i) => {
            let className = 'checkbox';
            if (solved.answer && solved.answer[i]) {
               className += ' success';
            } else if (solved.mistakes && solved.mistakes[i]) {
               className += ' error';
            }
            if (type == 'radio') className += ' radio';
            return (
               <Label_ key={i}>
                  <CustomCheckBox_ className={className}>
                     <Dot_ className="dot" />
                  </CustomCheckBox_>
                  <span>{e}</span>
               </Label_>
            );
         });
      }
   }

   createAnswerChoices() {
      const { answerChoices, type } = this.props.question;
      this.answer = this.props.savedData ? this.props.savedData : [];
      if (type == 'radio' || type == 'checkbox') {
         return answerChoices.map((e, i) => (
            <Label_ key={i}>
               <CheckBox_
                  type={type}
                  name="answer"
                  defaultChecked={this.answer[i]}
                  onChange={() => {
                     if (type == 'radio') this.answer = [];
                     this.answer[i] = !this.answer[i];
                  }}
               />
               <CustomCheckBox_ className={'checkbox ' + (type == 'radio' ? 'radio' : '')}>
                  <Dot_ className="dot" />
               </CustomCheckBox_>
               <span>{e}</span>
            </Label_>
         ));
      }
   }
}

export default Qualification;
/*
"object-curly-newline": 0,
      "no-mixed-operators": 0,
      "arrow-body-style": 0,
      "function-paren-newline": 0,
      "no-plusplus": 0,
      "space-before-function-paren": 0,
      "strict": 0,
      "linebreak-style": ["error", "windows"],
      "import/no-unresolved": 0,
      "indent": ["error", 3],
      "arrow-parens": 0,
      "no-nested-ternary": 0,
      "prettier/prettier": 0,
      "max-len": ["error", 200],
      "no-confusing-arrow": 0,
      "implicit-arrow-linebreak": 0,
      "no-param-reassign": 0,
      "radix": 0,
      "react/require-default-props": 0,
      "react/forbid-prop-types": 0,
      "prefer-destructuring": 0,
      "no-underscore-dangle": 0,
      "react/no-find-dom-node": 0,
      "react/no-did-mount-set-state": 0,
      "react/no-unused-prop-types": 0,
      "react/jsx-one-expression-per-line": 0,
      "jsx-a11y/anchor-is-valid": [
         "error",
         {
            "components": ["Link"],
            "specialLink": ["to"]
         }
      ],
      "react/prop-types": 0,
      "eqeqeq": 0,
      "no-return-assign": 0,
      "react/no-deprecated": 0,
      "react/no-direct-mutation-state": 0,
      "class-methods-use-this": 0,
      "no-useless-return": 0,
      "consistent-return": 0,
      "jsx-a11y/label-has-for": 0,
      "default-case": 0

 */
