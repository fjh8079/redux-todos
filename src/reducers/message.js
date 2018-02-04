import update from 'immutability-helper';
import { filter as _filter } from 'lodash';
import { CHANGE_SELECTED_TYPE, UPDATE_MESSAGES, ON_SELECT_LIST, CLEAR_SELECTED, DELETE_SELECTED } from '../constants';

const initialState = {
  total: 0,
  AllMessages: [],
  selectedId: []
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

    case ON_SELECT_LIST: {
      if (~state.selectedId.indexOf(action.payload)) {
        return update(state, {
          selectedId: {
            $set: _filter(state.selectedId, (item) => item !== action.payload)
          }
        })
      } else {
        return update(state, {
          selectedId: {
            $push: [action.payload]
          }
        })
      }
    }

    case DELETE_SELECTED: {
      const newArray = _filter(state.AllMessages, (item) => {
        return !~state.selectedId.indexOf(item.msg_id.toString())
      })
      return update(state, {
        AllMessages: {
          $set: newArray
        },
        selectedId: {
          $set: []
        }
      })
    }
      

    case CLEAR_SELECTED:
      return update(state, {
        selectedId: {
          $set: []
        }
      })

    default:
      return state;
  }
}

export default messageReducer;