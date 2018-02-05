import update from 'immutability-helper';
import { get as _get, filter as _filter } from 'lodash';
import { normalize } from 'normalizr';
import { messageListSchema } from '../schemas';
import { 
  CHANGE_SELECTED_TYPE, 
  UPDATE_MESSAGES, 
  ON_SELECT_LIST, 
  CLEAR_SELECTED,
  DELETE_SELECTED,
} from '../constants';

const initialState = {
  total: 0,
  nextPageKey: '',
  byId: {},
  allIds: [],
  selectedId: []
};

function messageReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGES: {
      const messageResults = normalize(action.payload.messages, messageListSchema);
      console.log('messageResults', messageResults)
      return update(state, {
        total: {
          $set: action.payload.total
        },
        nextPageKey: {
          $set: action.payload.nextPageKey
        },
        byId: {
          $merge: _get(messageResults, 'entities.messages', {})
        },
        allIds: {
          $push: messageResults.result
        }
      })
    }
      

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
      const newArray = _filter(state.allIds, (id) => {
        return !~state.selectedId.indexOf(id.toString())
      })
      return update(state, {
        allIds: {
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