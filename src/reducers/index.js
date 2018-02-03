import { combineReducers } from 'redux'
import visiableReducer from './visiable';
import messageReducer from './message';

const rootReducer = combineReducers({
  visiable: visiableReducer,
  message: messageReducer
});

export default rootReducer;