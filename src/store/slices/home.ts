import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '@store';
import { TSearchRequest, TSearchResponse, TLocationData } from '@types';

type THomeState = {
  isSearching: boolean;
  isLoading: boolean;
  error: string;
  searchResults: TSearchResponse;
  locationData?: TLocationData
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
>('home/getLocation', (payload, { extra: { api } }) => api.get.location(payload));

export const { reducer: homeReducer } = createSlice({
  name: 'home',
  initialState: {
    isSearching: false,
    isLoading: false,
    error: '',
    searchResults: [],
    locationData: undefined,
  } as THomeState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchLocation.pending, (state) => {
      state.isSearching = true;
    });
    builder.addCase(searchLocation.rejected, (state) => {
      state.error = 'There are some issues with the search request';
      state.isSearching = false;
    });
    builder.addCase(searchLocation.fulfilled, (state, { payload }) => {
      state.searchResults = [...payload.data];
      state.isSearching = false;
    });
    builder.addCase(getLocation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLocation.rejected, (state) => {
      state.error = 'There are some issues when getting data';
      state.isLoading = false;
    });
    builder.addCase(getLocation.fulfilled, (state, { payload }) => {
      state.locationData = payload.data;
      state.isLoading = false;
    });
  },
});
