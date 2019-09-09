import { all, fork } from 'redux-saga/effects';

import { rootSaga as worker } from './worker';

export default function* rootSaga() {
  yield all([
    fork(worker)
  ]);
}
