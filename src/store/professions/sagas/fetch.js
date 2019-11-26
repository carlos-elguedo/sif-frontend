import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as actions from '../actions';
import { getProfessions } from '../../../api/professions';

export function* fetchProfessions() {
  yield put(actions.professionsRequest());
  try {
    // yield call(delay, 300);
    const { data } = yield call(getProfessions);
    //console.log('FROM FETCH: ', data)
    yield put(actions.professionsSuccess(data));
    // console.log('FROM succes FETCH: ', data)
  } catch (error) {
    yield put(actions.professionsFailure(error));
  }
}