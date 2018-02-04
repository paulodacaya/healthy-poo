import React, { Component } from 'react';

//componets
import ResultInfo from './ResultInfo';
import ResultComments from './ResultComments';

//data
import resultsData, { otherText } from '../data/resultsData';

export default class Result extends Component {

  render() {
    const { shapeCode } = this.props.match.params;
    const { colorCode } = this.props.match.params;
    
    const info = resultsData[shapeCode][colorCode]; //grab object from URL parameters

    return (
      <div id="result-wrapper" className="wrapper">
        <h2><strong>and...</strong></h2>
        <div className="result">
          <ResultInfo info={info} otherText={otherText} />
          <ResultComments />
        </div>
      </div>
    )
  }
}