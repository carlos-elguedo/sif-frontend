import { combineReducers } from 'redux';
import types from '../actions/types';
import { forAllRegisters } from '../../../utils';

export const entities = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS: {
      const { client } = action.payload;
      return { ...state, ...client };
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
