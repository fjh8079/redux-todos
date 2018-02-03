import { CHANGE_SELECTED_TYPE } from '../constants';

export function onChangeSelected(val) {
  return {
    type: CHANGE_SELECTED_TYPE,
    payload: val,
  };
}