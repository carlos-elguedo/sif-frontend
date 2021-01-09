import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as actions from '../actions';
import { getProfessions } from '../../../api/professions';

export function* fetchProfessions() {
  yield put(actions.professionsRequest());
  try {
    const { data } = yield call(getProfessions);
    yield put(actions.professionsSuccess(data));
  } catch (error) {
    yield put(actions.professionsFailure(error));
  }
}