import { all, fork } from 'redux-saga/effects';
import { fetchMessages } from './message';

export default function* rootSaga() {
  yield all([
    fork(fetchMessages),
  ]);
}
