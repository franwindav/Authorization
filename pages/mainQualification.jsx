import React, { Component } from 'react';
import StartQua from 'Components/StartQualification';

class StartQualification extends Component {
   static getInitialProps({ query }) {
      return query;
   }

   render() {
      return <StartQua {...this.props} />;
   }
}

export default StartQualification;
