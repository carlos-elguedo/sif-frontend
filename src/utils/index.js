import { REQUEST_STATUSES } from '../constants';
// import { setFetchStatus } from '..';

export function forAllRegisters({
  FETCH,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  DEFAULT
} = {}) {
  return function fetchStatus(
    state = DEFAULT || REQUEST_STATUSES.NOT_LOADED,
    action
  ) {
    switch (action.type) {
      case FETCH:
        return REQUEST_STATUSES.NOT_LOADED;
      case FETCH_REQUEST:
        return REQUEST_STATUSES.LOADING;
      case FETCH_SUCCESS:
        return REQUEST_STATUSES.LOADED;
      case FETCH_FAILURE:
        return REQUEST_STATUSES.FAILED;
      default:
        return state;
    }
  };
}

/**
  fUNCTION TO RETURN THE TYPES OF REQUEST
*/

export const createActionTypes = (key, baseAction) => {
  return {
    [`${baseAction}`]: `${key}/${baseAction}`,
    [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
    [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
    [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`
  };
};
