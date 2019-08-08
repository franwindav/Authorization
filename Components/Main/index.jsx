import React, { Component } from 'react';
import { GlobalStyle_, Main_, Form_, Button_, Link_, Title_, Logout_, Ico_ } from './StyledComponents';

class Main extends Component {
   render() {
      return (
         <Main_>
            <GlobalStyle_ />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Logout_
               onClick={async () => {
                  await fetch('/logout', {
                     method: 'get'
                  }).then(() => {
                     window.location.replace('/authorization');
                  });
               }}
            >
               <Ico_ className="fa fa-sign-out logout" />
            </Logout_>
            <Form_>
               <Title_>Welcome</Title_>
               <Link_ href="/qualification">
                  <Button_>Qualify</Button_>
               </Link_>
            </Form_>
         </Main_>
      );
   }
}

export default Main;
