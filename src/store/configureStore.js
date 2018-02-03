import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const loggerMiddleware = createLogger();
middlewares.push(loggerMiddleware);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
