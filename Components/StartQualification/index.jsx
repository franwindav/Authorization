import React, { Component } from 'react';
import { GlobalStyle_, Form_, Qualification_, Title_, Button_, Container_, Results_, Link_ } from './StyledComponents';

class StartQualification extends Component {
   render() {
      let str;
      const { countQuest, now } = this.props;
      if (now == 0) {
         str = 'total issues ' + countQuest;
      } else {
         str = countQuest - now + ' questions left out of ' + countQuest;
      }
      return (
         <Qualification_>
            <GlobalStyle_ />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Form_>
               <Title_>Qualification assessment test</Title_>
               <Results_>{str}</Results_>
               <Container_>
                  <Link_ href={'/'}>
                     <Button_>skip</Button_>
                  </Link_>
                  <Link_ href={`/qualification/${now}`}>
                     <Button_>continue</Button_>
                  </Link_>
               </Container_>
            </Form_>
         </Qualification_>
      );
   }
}

export default StartQualification;
