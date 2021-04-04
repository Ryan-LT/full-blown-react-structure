import axios from 'axios';
import { configureClient, createApi } from '@api';
import { createStore, Store } from '@store';

export const createApp = (preloadedState?: any): Store => {
  const client = axios.create();
  configureClient(client);
  const api = createApi(client);

  const store = createStore({ api }, preloadedState);

  return store;
};
