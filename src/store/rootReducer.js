import { combineReducers } from 'redux';
import { rootReducer as worker } from './worker';
import { rootReducer as professions } from './professions';
import { rootReducer as categories } from './categories';


const entities = combineReducers({
  worker,
  professions,
  categories
});

export default combineReducers({
  // employer,
  entities
  // form: formReducer,
  // loggedInUser
});
