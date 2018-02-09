import * as CommentsActionTypes from '../actions/actiontypes/comments';
import * as HelpersActionTypes from '../actions/actiontypes/helpers';


/*----------  comment action creators  ----------*/
export const addComment = (name, text) => {
  return {
    type: CommentsActionTypes.ADD_COMMENT,
    name,
    text,
  }
}

export const removeComment = index => {
  return {
    type: CommentsActionTypes.REMOVE_COMMENT,
    index,
  }
}
  
/*--------  property action creators  -----------*/
export const toggleProperty = property => {
  return {
    type: HelpersActionTypes.TOGGLE_PROPERTY,
    property,
  }
}