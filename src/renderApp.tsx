import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { RouterView } from '@components';
import { createStore } from '@store';
import { router, configureRouter } from '@router';
import { configureClient, createApi } from '@api';
import routes from './router/routes';

const client = axios.create();
configureClient(client);
const api = createApi(client);

export const store = createStore({ router, api });

configureRouter(store);

router.start(() => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <RouterView routes={routes} />
      </RouterProvider>
    </Provider>,
    document.getElementById('root'),
  );
});
