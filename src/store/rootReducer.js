import { combineReducers } from 'redux';
import { rootReducer as worker } from './worker';
import { rootReducer as professions } from './professions';
import { rootReducer as categories } from './categories';
import { rootReducer as client } from './client';


const entities = combineReducers({
  worker,
  professions,
  categories,
  client
});

export default combineReducers({
  entities
  // form: formReducer,
  // loggedInUser
});
