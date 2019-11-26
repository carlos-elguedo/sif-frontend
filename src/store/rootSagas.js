import { all, fork } from 'redux-saga/effects';

import { rootSaga as worker } from './worker';
import { rootSaga as professions } from './professions';
import { rootSaga as categories } from './categories';

export default function* rootSaga() {
  yield all([
    fork(worker),
    fork(professions),
    fork(categories)
  ]);
}
