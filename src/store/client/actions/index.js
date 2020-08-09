import types from './types';

 export const clientFetch = () => ({
  type: types.FETCH
});
export const clientRequest = () => ({
  type: types.FETCH_REQUEST
});
export const clientSuccess = (client = []) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    client
  }
});
export const clientFailure = error => ({
  type: types.FETCH_FAILURE,
  payload: {
    error
  }
});
