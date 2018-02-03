import update from 'immutability-helper';
import { CHANGE_SELECTED_TYPE } from '../constants';

const initialState = 'All';

function visiableReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_TYPE:
      return update(state, {
        $set: action.payload
      });
    default:
      return state;
  }
}

export default visiableReducer;