import * as CommentsActionTypes from '../actions/actiontypes/comments';

//import comments
import comments from '../data/comments';

const intialState = comments;

const Comments = (state=intialState, action) => {

  switch(action.type) {
    case CommentsActionTypes.ADD_COMMENT:
      return [
        ...state,
        {
          name: action.name,
          text: action.text,
        }
      ]

    case CommentsActionTypes.REMOVE_COMMENT:
      return [
        ...state.slice( 0, action.index ),
        ...state.slice( action.index + 1 ),
      ]

      
    case CommentsActionTypes.REPLY_COMMENT:
      return console.log("replying to a comment");

    default:
      return state;
  } 
  
} 

export default Comments;