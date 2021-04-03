import React, { FunctionComponent, ReactElement } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { render, RenderOptions } from '@testing-library/react';
import { router, configureRouter } from '@router';
import { createStore, State } from '@store';
import { configureClient, createApi } from '@api';
import { DeepPartial } from '@utils';

const customRender = (
  ui: ReactElement,
  preloadedState?: DeepPartial<State>,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  const client = axios.create();
  configureClient(client);
  const api = createApi(client);

  const store = createStore({ router, api }, preloadedState);
  configureRouter(store);

  const Providers: FunctionComponent = ({ children }) => (
    <Provider store={store}>
      <RouterProvider router={router}>{children}</RouterProvider>
    </Provider>
  );
  return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
