import axios from 'axios';
import { configureClient, createApi } from '@api';
import { configureRouter, router } from '@router';
import { createStore, Store } from '@store';

export const createApp = (preloadedState?: any): Store => {
  const client = axios.create();
  configureClient(client);
  const api = createApi(client);

  const store = createStore({ router, api }, preloadedState);

  configureRouter(store);

  return store;
};
