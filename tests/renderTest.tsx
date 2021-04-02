import React, { FC, ReactElement } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { render, RenderOptions } from '@testing-library/react';
import { router, configureRouter } from '@router';
import { createStore } from '@store';
import { configureClient, createApi } from '@api';

const client = axios.create();
configureClient(client);
const api = createApi(client);

export const store = createStore({ router, api });

configureRouter(store);

const Providers: FC = ({ children }) => (
  <Provider store={store}>
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  </Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
