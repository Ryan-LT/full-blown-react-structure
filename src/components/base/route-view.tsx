import React, { FunctionComponent } from 'react';
import { Route as RouteState } from '@router';
import { useRoute } from 'react-router5';

export const RouterView: FunctionComponent<{ routes: RouteState[] }> = ({
  routes,
}) => {
  const route = useRoute();
  const { Component } = routes.find((r) => r.name === route.route.name) || {};
  return Component ? <Component /> : null;
};
