import React, { Component } from 'react';
import Qua from 'Components/Qualification';

class Qualification extends Component {
   static getInitialProps({ query }) {
      return query;
   }

   render() {
      return <Qua {...this.props} />;
   }
}

export default Qualification;
