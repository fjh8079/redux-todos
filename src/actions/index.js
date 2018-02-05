import { 
  CHANGE_SELECTED_TYPE, 
  FETCH_MESSAGES, 
  ON_SELECT_LIST, 
  CLEAR_SELECTED, 
  DELETE_SELECTED
} from '../constants';

export function onChangeSelected(val) {
  return {
    type: CHANGE_SELECTED_TYPE,
    payload: val,
  };
}

export function fetchMessages(nextPageKey) {
  return {
    type: FETCH_MESSAGES,
    payload: nextPageKey
  };
}

export function onSelectList(id) {
  return {
    type: ON_SELECT_LIST,
    payload: id
  }
}

export function clearSelected() {
  return {
    type: CLEAR_SELECTED
  }
}

export function deleteSelected() {
  return {
    type: DELETE_SELECTED
  }
}