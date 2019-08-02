import React, { Component } from 'react';

import Form from './Form';
import { Authorization_, Error_, GlobalStyle } from './StyledComponents';

class Authorization extends Component {
   state = {
      error: undefined
   };

   render() {
      return (
         <div>
            <GlobalStyle />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            {this.state.error ? <Error_>{this.state.error}</Error_> : ''}
            <Authorization_>
               <Form
                  setError={error => {
                     this.setState({
                        error
                     });
                  }}
               />
            </Authorization_>
         </div>
      );
   }
}

export default Authorization;
