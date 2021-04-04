import { configureStore } from '@reduxjs/toolkit';
import { store } from 'src/renderApp';
import { homeReducer } from '@store';
import { Api } from '@api';

export const createStore = (
  thunkExtraAguments: ThunkExtraAguments,
  preloadedState?: any,
) =>
  configureStore({
    reducer: {
      home: homeReducer,
    },
    preloadedState,
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
export type ThunkExtraAguments = { api: Api };
export type ThunkApiConfig = {
  extra: ThunkExtraAguments;
};
