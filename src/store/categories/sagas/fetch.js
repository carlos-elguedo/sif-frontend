import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as actions from '../actions';
import { getCategories } from '../../../api/professions';

export function* fetchCategories() {
  yield put(actions.categoriesRequest());
  try {
    const { data } = yield call(getCategories);
    yield put(actions.categoriesSuccess(data));
  } catch (error) {
    yield put(actions.categoriesFailure(error));
  }
}