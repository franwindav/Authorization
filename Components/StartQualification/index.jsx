import React, { Component } from 'react';
import { GlobalStyle_, Form_, Qualification_, Title_, Button_, Container_, Results_, Link_, Progress_, ProgressLine_ } from './StyledComponents';

class StartQualification extends Component {
   state = {
      ...this.props
   };

   render() {
      let str;
      let control;
      const { countQuest, now, solved, successSolved } = this.state;
      if (now == -1) {
         str = 'there are no questions for you yet';
      } else if (solved == countQuest) {
         str = 'Hooray! All test resolved';
      } else if (solved == 0) {
         str = 'total issues ' + countQuest;
      } else {
         str = countQuest - solved + ' questions left out of ' + countQuest;
      }
      if (now == -1) {
         control = (
            <Link_ key="1" href={'/'}>
               <Button_>go to main</Button_>
            </Link_>
         );
      } else if (solved == countQuest) {
         control = [
            <Link_ key="1" href={'/'}>
               <Button_>go to main</Button_>
            </Link_>,
            <Link_ key="2">
               <Button_
                  onClick={() => {
                     this.restartTest();
                  }}
               >
                  go through again
               </Button_>
            </Link_>
         ];
      } else {
         control = [
            <Link_ key="1" href={'/'}>
               <Button_>skip</Button_>
            </Link_>,
            <Link_ key="2" href={`/qualification/${now}`}>
               <Button_>continue</Button_>
            </Link_>
         ];
      }
      return (
         <Qualification_>
            <GlobalStyle_ />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Form_>
               <Title_>Qualification assessment test</Title_>
               <Results_>{str}</Results_>
               <Progress_>
                  <ProgressLine_ className="line" color="#28a745" procent={(successSolved / countQuest) * 100} />
                  <ProgressLine_ className="line" color="#dc3545" procent={((solved - successSolved) / countQuest) * 100} />
               </Progress_>
               <Container_>{control}</Container_>
            </Form_>
         </Qualification_>
      );
   }
   async restartTest() {
      await fetch(window.location.href, {
         method: 'DELETE'
      }).then(response => {
         response.json().then(res => {
            this.setState({
               ...res
            });
         });
      });
   }
}

export default StartQualification;
