import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore';
import AppRoute from './routes';

let reduxState = {};

const store = configureStore(reduxState);

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main-app')
);
