import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [];

const loggerMiddleware = createLogger();
middlewares.push(loggerMiddleware);

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  return store;
}

