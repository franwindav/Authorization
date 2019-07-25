import React, { Component } from 'react';
import { Success_, Link_, GoToMain_, GlobalStyle } from './StyledComponents';

class SuccessRegistration extends Component {
   render() {
      return (
         <div>
            <GlobalStyle />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Success_>
               <i className="fa fa-check-circle"></i>
               Successful registration
            </Success_>

            <Link_ href="/">
               <GoToMain_>go to main</GoToMain_>
            </Link_>
         </div>
      );
   }
}

export default SuccessRegistration;
