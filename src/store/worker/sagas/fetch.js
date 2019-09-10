import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import * as actions from '../actions';
import { userIsLogged } from '../../../api/worker';

export function* fetchWorker() {
  yield put(actions.workerRequest());
  try {
    // yield call(delay, 300);
    const { data } = yield call(userIsLogged);
    // console.log('FROM FETCH: ', data)
    yield put(actions.workerSuccess(data));
    // console.log('FROM succes FETCH: ', data)
  } catch (error) {
    yield put(actions.workerFailure(error));
  }
}