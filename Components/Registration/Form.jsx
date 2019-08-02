import React, { Component } from 'react';
import SignControl from 'Components/SignControl';
import { Form_, Title_, Data_, Field_, Ico_, Warn_, MainRole_, Roles_, RoleContainer_, RadioRole_, Filter_, Label_, Role_, Chosen_, DataField_ } from './FormStyles';

class Form extends Component {
   render() {
      const { inConfirmPassword, inPassword, inLogin, inRole } = this.props.errors;
      return (
         <Form_
            action="/registration"
            method="POST"
            onSubmit={e => {
               e.preventDefault();

               fetch('/registration', {
                  method: 'POST',
                  body: JSON.stringify({
                     login: this.login.value,
                     password: this.password.value,
                     confirmPassword: this.confirmPassword.value,
                     role: this.role
                  }),
                  headers: { 'content-type': 'application/json' }
               }).then(response => {
                  response.json().then(res => {
                     if (res.errors == undefined) window.location.replace(res.nextPage);
                     this.props.setErrors(res.errors);
                  });
               });

               return false;
            }}
         >
            <Title_>Registration</Title_>
            <Data_>
               <Field_ type="text" name="login" placeholder="Login" ref={e => (this.login = e)} />
               <Ico_ className="fa fa-sign-in ico" />
               {inLogin ? this.warn(inLogin) : ''}
            </Data_>
            <Data_>
               <Field_ type="password" name="password" placeholder="Password" ref={e => (this.password = e)} />
               <Ico_ className="fa fa-lock ico" />
               {inPassword ? this.warn(inPassword) : ''}
            </Data_>
            <Data_>
               <Field_ type="password" name="confirmPassword" placeholder="Confirm password" ref={e => (this.confirmPassword = e)} />
               <Ico_ className="fa fa-lock ico" />
               {inConfirmPassword ? this.warn(inConfirmPassword) : ''}
            </Data_>
            <MainRole_
               onClick={() => {
                  this.Roles.classList.toggle('active');
               }}
            >
               <DataField_>
                  {inRole ? this.warn(inRole) : ''}
                  <Chosen_ ref={e => (this.Chosen = e)}>not chosen</Chosen_>
                  <Ico_ className="fa fa-user ico" />
                  <Roles_ ref={e => (this.Roles = e)}>
                     {this.props.roles.map((e, i) => (
                        <RoleContainer_ key={i}>
                           <Label_>
                              <RadioRole_
                                 type="radio"
                                 name="role"
                                 value={e}
                                 onClick={() => {
                                    this.role = i;
                                    this.Chosen.innerText = e;
                                    this.Roles.classList.toggle('active');
                                 }}
                              />
                              <Filter_ className="filter" />
                              <Role_>{e}</Role_>
                           </Label_>
                        </RoleContainer_>
                     ))}
                  </Roles_>
               </DataField_>
            </MainRole_>
            <SignControl />
         </Form_>
      );
   }

   warn = err => <Warn_ className="fa fa-exclamation-circle" title={err} />;
}

export default Form;
