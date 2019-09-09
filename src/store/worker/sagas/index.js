import { takeLatest } from 'redux-saga/effects';
import { fetchWorker } from './fetch';
import types from '../actions/types';

 export default function* root() {
  yield takeLatest(types.FETCH, fetchWorker);
}