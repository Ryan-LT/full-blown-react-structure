import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from '@store';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <h1>Im here!!!</h1>
  </Provider>,
  document.getElementById('root'),
);
