import React, { Component } from 'react';
import StartQua from 'Components/StartQualification';

class StartQualification extends Component {
   static getInitialProps({ query }) {
      return query;
   }

   render() {
      const { countQuest, now } = this.props;
      return <StartQua countQuest={countQuest} now={now} />;
   }
}

export default StartQualification;
