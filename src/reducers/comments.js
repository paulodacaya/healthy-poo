import * as CommentsActionTypes from '../actions/actiontypes/comments';

//import comments
import comments from '../data/comments';

const intialState = comments;

const Comments = (state=intialState, action) => {

  switch(action.type) {
    case CommentsActionTypes.ADD_COMMENT:
      console.log( action.id );
      return [
        ...state,
        { 
          id: action.id,
          name: action.name,
          text: action.text,
        }
      ]

    case CommentsActionTypes.REMOVE_COMMENT:  
      const filterByID = comment => {
        const { id, children } = comment;
        if(id === action.id) {
          return false;
        } else {
          return true;
        }
      }

      return state.filter( filterByID );

    default:
      return state;
  } 
  
} 

export default Comments;