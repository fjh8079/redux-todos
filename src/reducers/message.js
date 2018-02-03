import update from 'immutability-helper';
import { CHANGE_SELECTED_TYPE, UPDATE_MESSAGES } from '../constants';

const initialState = {
  total: 0,
  AllMessages: []
};

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGES:
      return update(state, {
        total: {
          $set: action.payload.total
        },
        AllMessages: {
          $push: action.payload.messages
        }
      })

    default:
      return state;
  }
}

export default messageReducer;