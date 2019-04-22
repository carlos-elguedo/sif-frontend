import { combineReducers } from 'redux';
import { rootReducer as worker } from './worker';


const entities = combineReducers({
  worker
});

export default combineReducers({
  // employer,
  entities
  // form: formReducer,
  // loggedInUser
});
