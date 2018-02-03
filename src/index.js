import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

let reduxState = {};

const store = configureStore(reduxState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-app')
);
