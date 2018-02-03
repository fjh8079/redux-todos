import { combineReducers } from 'redux'
import visiableReducer from './visiable';

const rootReducer = combineReducers({
  visiable: visiableReducer
});

export default rootReducer;