import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as actions from '../actions';
import { getWorker } from '../../../api/worker';

export function* fetchWorker() {
  yield put(actions.workerRequest());
  try {
    const { data } = yield call(getWorker);
    yield put(actions.workerSuccess(data));
  } catch (error) {
    yield put(actions.workerFailure(error));
  }
}