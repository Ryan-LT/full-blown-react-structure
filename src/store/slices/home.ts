import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '@store';
import { TSearchRequest, TSearchResponse, TLocationData } from '@types';

type THomeState = {
  isSearching: boolean;
  isLoading: boolean;
  error: boolean;
  searchResults: TSearchResponse;
  locationData?: TLocationData;
};

export const initialState: THomeState = {
  isSearching: false,
  isLoading: false,
  error: false,
  searchResults: [],
  locationData: undefined,
};

export const searchLocation = createAsyncThunk<
{ data: TSearchResponse },
TSearchRequest,
ThunkApiConfig
>('home/query', (payload, { extra: { api } }) => api.get.search(payload));

export const getLocation = createAsyncThunk<
{ data: TLocationData },
number,
ThunkApiConfig
>('home/getLocation', (payload, { extra: { api } }) =>
  api.get.location(payload));

export const { reducer: homeReducer } = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchLocation.pending, (state) => {
      state.isSearching = true;
    });
    builder.addCase(searchLocation.rejected, (state) => {
      state.error = true;
      state.isSearching = false;
    });
    builder.addCase(searchLocation.fulfilled, (state, { payload }) => {
      state.searchResults = [...payload.data];
      state.error = false;
      state.isSearching = false;
    });
    builder.addCase(getLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLocation.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
    builder.addCase(getLocation.fulfilled, (state, { payload }) => {
      state.locationData = payload.data;
      state.error = false;
      state.isLoading = false;
    });
  },
});
