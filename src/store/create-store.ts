import { configureStore } from '@reduxjs/toolkit';
import { router5Reducer } from 'redux-router5';
import { Router } from 'router5';
import { store } from 'src/renderApp';
import { homeReducer } from '@store';

export const createStore = (router: Router) =>
  configureStore({
    reducer: {
      router: router5Reducer,
      home: homeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: { router } } }),
  });

export type Store = ReturnType<typeof configureStore>;
export type State = ReturnType<typeof store.getState>;
export type ThunkExtra = {
  extra: { router: Router };
};
