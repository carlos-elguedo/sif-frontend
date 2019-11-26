import { takeLatest } from 'redux-saga/effects';
import { fetchCategories } from './fetch';
import types from '../actions/types';

 export default function* root() {
  yield takeLatest(types.FETCH_CATEGORIES, fetchCategories);
}