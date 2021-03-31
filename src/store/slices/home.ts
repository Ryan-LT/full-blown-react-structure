import { createSlice } from '@reduxjs/toolkit';

type THomeState = {
  title: string;
};

export const {
  reducer: homeReducer,
  actions: { getHome },
} = createSlice({
  name: 'home',
  initialState: {
    title: '',
  } as THomeState,
  reducers: {
    getHome: (state) => {
      state.title = "It's Home";
    },
  },
});
