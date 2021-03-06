import * as HelpersActionTypes from '../actions/actiontypes/helpers';

const intialState = {
  isDisplayingCommentForm: false,
};

const toggleProperty = (state=intialState, action) => {

  switch(action.type) {
    case HelpersActionTypes.TOGGLE_PROPERTY:
      return {
        ...state,
        [action.property]: !state[action.property],
      }
    
    default:
      return state;
  } 
} 

export default toggleProperty;