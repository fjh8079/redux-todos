import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_MESSAGES, UPDATE_MESSAGES } from '../constants';
import { fetchMessagesData } from '../api/xhr';

export function* fetchMessageFlow(action) {
  try {
    const messages = yield call(fetchMessagesData, action.payload);
    yield put({ type: UPDATE_MESSAGES, payload: messages });
  } catch (error) {
    console.log('searchMovieFlow error', error);
  }
}


export function* fetchMessages() {
  yield takeEvery(FETCH_MESSAGES, fetchMessageFlow);
}