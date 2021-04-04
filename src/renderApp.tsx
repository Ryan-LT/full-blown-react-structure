import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { router } from '@router';
import { RouterView } from '@components';
import routes from './router/routes';
import { createApp } from './create-app';

export const store = createApp();

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
