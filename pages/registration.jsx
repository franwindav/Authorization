import React, { Component } from 'react';
import Reg from 'Components/Registration';

class Registration extends Component {
   static getInitialProps({ query }) {
      return query;
   }

   render() {
      const { errors, roles } = this.props;
      return <Reg errors={errors} roles={roles} />;
   }
}

export default Registration;
