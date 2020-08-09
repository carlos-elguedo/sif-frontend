import { takeLatest } from 'redux-saga/effects';
import { fetchClient } from './fetch';
import types from '../actions/types';

 export default function* root() {
  yield takeLatest(types.FETCH, fetchClient);
}