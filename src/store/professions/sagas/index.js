import { takeLatest } from 'redux-saga/effects';
import { fetchProfessions } from './fetch';
import types from '../actions/types';

 export default function* root() {
  yield takeLatest(types.FETCH, fetchProfessions);
}