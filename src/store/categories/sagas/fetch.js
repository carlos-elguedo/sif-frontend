import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as actions from '../actions';
import { getCategories } from '../../../api/professions';

export function* fetchCategories() {
  yield put(actions.categoriesRequest());
  try {
    // yield call(delay, 300);
    const { data } = yield call(getCategories);
    //console.log('FROM FETCH CATEGORIES: ', data)
    yield put(actions.categoriesSuccess(data));
    // console.log('FROM succes FETCH: ', data)
  } catch (error) {
    yield put(actions.categoriesFailure(error));
  }
}