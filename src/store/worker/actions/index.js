import types from './types';

 export const workerFetch = () => ({
  type: types.FETCH
});
export const workerRequest = () => ({
  type: types.FETCH_REQUEST
});
export const workerSuccess = (worker = []) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    worker
  }
});
export const workerFailure = error => ({
  type: types.FETCH_FAILURE,
  payload: {
    error
  }
});
