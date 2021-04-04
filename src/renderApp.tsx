import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Home } from '@pages';
import { createApp } from './create-app';

export const store = createApp();

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'),
);
