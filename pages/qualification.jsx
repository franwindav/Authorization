import React, { Component } from 'react';
import Qua from 'Components/Qualification';

class Qualification extends Component {
   static getInitialProps({ query }) {
      return query;
   }

   render() {
      const { question, nextQuestion, solved } = this.props;
      return <Qua question={question} nextQuestion={nextQuestion} solved={solved} />;
   }
}

export default Qualification;
