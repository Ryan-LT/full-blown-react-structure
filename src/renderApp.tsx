import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router5';
import { RouterView } from '@components';
import { createStore } from '@store';
import routes from './router/routes';
import { router, configureRouter } from './router/create-router';

export const store = createStore(router);

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
