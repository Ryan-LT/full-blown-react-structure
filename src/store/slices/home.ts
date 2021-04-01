import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '@store';

type THomeState = {
  title: string;
  data: any;
};

export const getDefaultForecast = createAsyncThunk<any, void, ThunkApiConfig>(
  'home/query',
  (payload, { extra: { api } }) => api.get.query(payload),
);

export const { reducer: homeReducer } = createSlice({
  name: 'home',
  initialState: {
    title: '',
  } as THomeState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDefaultForecast.fulfilled, (state, { payload }) => {
      state.data = payload.data;
    });
  },
});
