import React, { Component } from 'react';
import SignControl from 'Components/SignControl';
import { Form_, Title_, Data_, Field_, Ico_ } from './FormStyles';

class Form extends Component {
   render() {
      return (
         <Form_
            action="/authorization"
            method="POST"
            onSubmit={e => {
               e.preventDefault();
               const { setError } = this.props;
               fetch('/authorization', {
                  method: 'POST',
                  body: JSON.stringify({
                     login: this.login.value,
                     password: this.password.value
                  }),
                  headers: { 'content-type': 'application/json' }
               }).then(response => {
                  response.json().then(res => {
                     if (res.error) {
                        setError(res.error);
                     } else {
                        window.location.replace(res.nextPage);
                     }
                  });
               });
               return false;
            }}
         >
            <Title_>Authorization</Title_>
            <Data_>
               <Field_ type="text" name="login" placeholder="Login" ref={e => (this.login = e)} />
               <Ico_ className="fa fa-sign-in ico" />
            </Data_>
            <Data_>
               <Field_ type="password" name="password" placeholder="Password" ref={e => (this.password = e)} />
               <Ico_ className="fa fa-lock ico" />
            </Data_>
            <SignControl isAuth={true} />
         </Form_>
      );
   }
}

export default Form;
