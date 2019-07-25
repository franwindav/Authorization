import React, { Component } from 'react';
import { SignControl_, Sign_, SignSeparator_ } from './StyledComponents';

const or = <SignSeparator_ key="2">or</SignSeparator_>;

class SignControl extends Component {
   render() {
      let res = [or];
      if (this.props.isAuth) {
         res.unshift(
            <Sign_ key="1" className="main" type="submit">
               sign in
            </Sign_>
         );
         res.push(
            <a key="3" href="/registration">
               <Sign_ type="button">sign up</Sign_>
            </a>
         );
      } else {
         res.unshift(
            <Sign_ key="1" className="main" type="submit">
               sign up
            </Sign_>
         );
         res.push(
            <a key="3" href="/authorization">
               <Sign_ type="button">sign in</Sign_>
            </a>
         );
      }
      return <SignControl_>{res}</SignControl_>;
   }
}

export default SignControl;
