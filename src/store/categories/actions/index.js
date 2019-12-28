import types from './types';

//Categories all
export const categoriesFetch  = () => ({
  type: types.FETCH
});
export const categoriesRequest = () => ({
  type: types.FETCH_REQUEST
});
export const categoriesSuccess = (categories = []) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    categories
  }
});
export const categoriesFailure = error => ({
  type: types.FETCH_FAILURE,
  payload: {
    error
  }
});