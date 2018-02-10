import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

//componets
import ResultInfo from './ResultInfo';
import ResultComments from './ResultComments';

//data
import resultsData, { otherText } from '../data/resultsData';

class Result extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    helpers: PropTypes.object.isRequired,
  }

  render() {
    const { dispatch } = this.props;
    const addComment = bindActionCreators( ActionCreators.addComment, dispatch );
    const removeComment = bindActionCreators( ActionCreators.removeComment, dispatch );
    const toggleProperty = bindActionCreators( ActionCreators.toggleProperty, dispatch );

    const { shapeCode } = this.props.match.params;
    const { colorCode } = this.props.match.params;
    const info = resultsData[shapeCode][colorCode]; //grab object from URL parameters

    return (
      <div id="result-wrapper" className="wrapper">
        <h2><strong>and...</strong></h2>
        <div className="result">
          <ResultInfo info={info} otherText={otherText} />
          <ResultComments 
            {...this.props}
            addComment={addComment}
            removeComment={removeComment}
            toggleProperty={toggleProperty} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    comments: state.comments,
    helpers: state.helpers,
  }
);

export default connect(mapStateToProps)(Result);