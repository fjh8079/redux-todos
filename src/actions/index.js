import { CHANGE_SELECTED_TYPE, FETCH_MESSAGES } from '../constants';

export function onChangeSelected(val) {
  return {
    type: CHANGE_SELECTED_TYPE,
    payload: val,
  };
}

export function fetchMessages(val) {
  return {
    type: FETCH_MESSAGES
  };
}