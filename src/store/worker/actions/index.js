import types from './types';

 export const workerFetch = () => ({
  type: types.FETCH
});
export const workerRequest = () => ({
  type: types.FETCH_REQUEST
});
export const workerSuccess = (exclusions = []) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    exclusions
  }
});
export const workerFailure = error => ({
  type: types.FETCH_FAILURE,
  payload: {
    error
  }
});
