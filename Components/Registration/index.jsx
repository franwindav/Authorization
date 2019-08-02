import React, { Component } from 'react';

import Form from './Form';
import { Registration_, Error_, GlobalStyle } from './StyledComponents';

class Registration extends Component {
   state = {
      errors: {}
   };

   render() {
      const { roles } = this.props;
      return (
         <div>
            <GlobalStyle />
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            {Object.keys(this.state.errors).length !== 0 ? <Error_>Incorrect data</Error_> : ''}
            <Registration_>
               <Form
                  errors={this.state.errors}
                  roles={roles}
                  setErrors={errors => {
                     this.setState({ errors });
                  }}
               />
            </Registration_>
         </div>
      );
   }
}

export default Registration;
