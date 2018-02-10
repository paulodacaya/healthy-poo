import * as CommentsActionTypes from '../actions/actiontypes/comments';
import * as HelpersActionTypes from '../actions/actiontypes/helpers';


/*----------  comment action creators  ----------*/
export const addComment = (name, text, id) => {
  return {
    type: CommentsActionTypes.ADD_COMMENT,
    name,
    text,
    id,
  }
}

export const removeComment = id => {
  return {
    type: CommentsActionTypes.REMOVE_COMMENT,
    id,
  }
}
  
/*--------  property action creators  -----------*/
export const toggleProperty = property => {
  return {
    type: HelpersActionTypes.TOGGLE_PROPERTY,
    property,
  }
}