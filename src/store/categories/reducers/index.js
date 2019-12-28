import { combineReducers } from 'redux';
import types from '../actions/types';
import { forAllRegisters } from '../../../utils';

export const entities = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS: {
      const { categories } = action.payload;
      return {...state, ...categories}
    }

     default:
      return state;
  }
};

 const fetchStatus = forAllRegisters(types);

 export default combineReducers({
  entities,
  fetchStatus
});
