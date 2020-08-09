import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as actions from '../actions';
import { getClient } from '../../../api/client';

export function* fetchClient() {
  yield put(actions.clientRequest());
  try {
    // yield call(delay, 300);
    const { data } = yield call(getClient);
    yield put(actions.clientSuccess(data));
  } catch (error) {
    yield put(actions.clientFailure(error));
  }
}
