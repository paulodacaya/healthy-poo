import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions/actionCreators';

//componets
import Notfound from './Notfound';
import ResultInfo from './ResultInfo';
import ResultComments from './ResultComments';

//data
import stoolShapes from '../data/stoolShapes';
import stoolColors from '../data/stoolColors';
import resultsData, { otherText } from '../data/resultsData';

class Result extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    helpers: PropTypes.object.isRequired,
  }

  render() {
    //bind action creators
    const { dispatch } = this.props;
    const addComment = bindActionCreators( ActionCreators.addComment, dispatch );
    const removeComment = bindActionCreators( ActionCreators.removeComment, dispatch );
    const toggleProperty = bindActionCreators( ActionCreators.toggleProperty, dispatch );

    // validate URL function
    const validateURL = (data, param) => {
      for(let i = 0; i < data.length; i++) {
        if(data[i].code === param) {
          return true;
        }
      }
    }

    const { shapeCode } = this.props.match.params;
    const { colorCode } = this.props.match.params;

    // validate URL
    if( validateURL( stoolShapes, shapeCode ) && validateURL( stoolColors, colorCode )) {
      
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
    } else {
      return <Notfound />;
    }
  }
}

const mapStateToProps = state => (
  {
    comments: state.comments,
    helpers: state.helpers,
  }
);

export default connect(mapStateToProps)(Result);