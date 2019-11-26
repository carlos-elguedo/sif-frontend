import types from './types';

//Categories all
export const categoriesFetch  = () => ({
  type: types.FETCH_CATEGORIES
});
export const categoriesRequest = () => ({
  type: types.FETCH_CATEGORIES_REQUEST
});
export const categoriesSuccess = (categories = []) => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  payload: {
    categories
  }
});
export const categoriesFailure = error => ({
  type: types.FETCH_CATEGORIES_FAILURE,
  payload: {
    error
  }
});