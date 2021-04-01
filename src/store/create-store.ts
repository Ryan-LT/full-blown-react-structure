import { configureStore } from '@reduxjs/toolkit';
import { router5Reducer } from 'redux-router5';
import { Router } from 'router5';
import { store } from 'src/renderApp';
import { homeReducer } from '@store';
import { Api } from '@api';

export const createStore = (thunkExtraAguments: ThunkExtraAguments) =>
  configureStore({
    reducer: {
      router: router5Reducer,
      home: homeReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware<{
        serializableCheck: boolean;
        thunk: {
          extraArgument: ThunkExtraAguments;
        };
      }>({
        serializableCheck: false,
        thunk: { extraArgument: thunkExtraAguments },
      }),
  });

export type Store = ReturnType<typeof createStore>;
export type State = ReturnType<typeof store.getState>;
export type ThunkExtraAguments = { router: Router; api: Api };
export type ThunkApiConfig = {
  extra: ThunkExtraAguments;
};
