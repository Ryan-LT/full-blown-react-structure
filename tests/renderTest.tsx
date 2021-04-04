import React, { FunctionComponent, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { render, RenderOptions } from '@testing-library/react';
import { router } from '@router';
import { State } from '@store';
import { DeepPartial } from '@utils';
import { createApp } from '../src/create-app';

const customRender = (
  ui: ReactElement,
  preloadedState?: DeepPartial<State>,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  const store = createApp(preloadedState);

  const Providers: FunctionComponent = ({ children }) => (
    <Provider store={store}>
      <RouterProvider router={router}>{children}</RouterProvider>
    </Provider>
  );
  return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
