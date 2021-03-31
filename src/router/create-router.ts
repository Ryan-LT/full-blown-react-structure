import createRouter from 'router5';
import routerBrowserPlugin from 'router5-plugin-browser';
import { reduxPlugin } from 'redux-router5';
import { preloadDataMiddleware } from '@router';
import { Store } from '@store';
import routes from './routes';

export const router = createRouter(routes, {
  defaultRoute: 'home',
});

export const configureRouter = (store: Store) => {
  router.setDependencies({ store });

  router.usePlugin(routerBrowserPlugin());
  router.usePlugin(reduxPlugin(store.dispatch));

  router.useMiddleware(preloadDataMiddleware(routes));

  return router;
};

export type Routes = ReturnType<typeof createRouter>;
