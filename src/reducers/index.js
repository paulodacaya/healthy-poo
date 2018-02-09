import { combineReducers } from 'redux';

//reducers
import comments from './comments';
import helpers from './helpers';

const rootReducer = combineReducers({
  comments,
  helpers,
});

export default rootReducer;