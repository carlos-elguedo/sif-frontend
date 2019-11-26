import types from './types';

//Professions all
 export const professionsFecth = () => ({
  type: types.FETCH
});
export const professionsRequest = () => ({
  type: types.FETCH_REQUEST
});
export const professionsSuccess = (professions = []) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    professions
  }
});
export const professionsFailure = error => ({
  type: types.FETCH_FAILURE,
  payload: {
    error
  }
});



//Categories all
