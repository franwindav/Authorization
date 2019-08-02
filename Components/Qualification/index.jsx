import React, { Component } from 'react';
import { GlobalStyle_, Qualification_, Form_, Title_, AnswerChoices_, CheckBox_, CustomCheckBox_, Label_, Dot_, Send_, Container_, Error_, Link_ } from './StyledComponents';

class Qualification extends Component {
   state = {
      solved: this.props.solved
   };

   answer = [];

   render() {
      const { name } = this.props.question;
      const { nextQuestion } = this.props;
      const { solved } = this.state;
      return (
         <Qualification_>
            <GlobalStyle_ />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
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
                           this.setState({ solved: res.solved });
                        }
                     });
                  });

                  return false;
               }}
            >
               <Title_>
                  {name}
                  {solved ? ' ( checked )' : ''}
               </Title_>
               <AnswerChoices_>{solved ? this.createStaticAnswer() : this.createAnswerChoices()}</AnswerChoices_>
               <Container_>
                  {solved ? (
                     <Link_ href={nextQuestion ? `/qualification/${nextQuestion}` : '/qualification'}>
                        <Send_ type="button">next</Send_>
                     </Link_>
                  ) : (
                     <Send_ type="submit">check</Send_>
                  )}
               </Container_>
            </Form_>
         </Qualification_>
      );
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

      if (type == 'radio' || type == 'checkbox') {
         return answerChoices.map((e, i) => (
            <Label_ key={i}>
               <CheckBox_
                  type={type}
                  name="answer"
                  onChange={() => {
                     if (type == 'radio') this.answer = [];
                     this.answer[i] = !this.answer[i];
                  }}
               />
               <CustomCheckBox_ className="checkbox">
                  <Dot_ className="dot" />
               </CustomCheckBox_>
               <span>{e}</span>
            </Label_>
         ));
      }
   }
}

export default Qualification;
