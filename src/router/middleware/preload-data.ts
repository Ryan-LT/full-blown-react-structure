import { Middleware } from 'router5';
import transitionPath from 'router5-transition-path';
import { Route } from '@router';
import { MiddlewareFactory } from 'router5/dist/types/router';

export const preloadDataMiddleware = (routes: Route[]): MiddlewareFactory => (
  _router,
  { store },
): Middleware => async (toState, fromState, done) => {
  const { toActivate } = transitionPath(toState, fromState);
  const promises: Promise<void>[] = [];

  toActivate.forEach((routeName) => {
    const route = routes.find((r) => r.name === routeName);
    if (route && route.preloadData) {
      promises.push(route.preloadData(store));
    }
  });
  await Promise.all(promises);
  done();
};
