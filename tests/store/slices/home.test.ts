import { PayloadAction } from '@reduxjs/toolkit';
import {
  initialState,
  homeReducer,
  createStore,
  searchLocation,
  getLocation,
} from '@store';
import { router } from '@router';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { configureClient, createApi } from '@api';

const mock = new MockAdapter(axios);

const client = axios.create();
configureClient(client);
const api = createApi(client);

const store = createStore({ router, api });

describe('Home Reducer', () => {
  test('should return initial state on first run', () => {
    const nextState = initialState;
    const action = {} as PayloadAction;
    const result = homeReducer(undefined, action);

    expect(result).toEqual(nextState);
  });
});

describe('Home Slice', () => {
  beforeEach(() => {
    mock.reset();
  });

  test('should dispatch search location and return success state', async () => {
    const expectedResponse = [
      {
        title: 'London',
        location_type: 'City',
        woeid: 44418,
        latt_long: '51.506321,-0.12714',
      },
    ];

    mock
      .onGet('/location/search/', { params: { query: 'london' } })
      .replyOnce(200, expectedResponse);

    expect(store.getState().home.isSearching).toBeFalsy();

    const promise = store.dispatch(searchLocation({ query: 'london' }));

    expect(store.getState().home.isSearching).toBeTruthy();

    await Promise.resolve(promise);

    expect(store.getState().home.error).toBeFalsy();
    expect(store.getState().home.searchResults).toEqual(expectedResponse);
  });

  test('should dispatch search location and return error state', async () => {
    mock
      .onGet('/location/search/', { params: { query: 'london' } })
      .networkErrorOnce();

    const promise = store.dispatch(searchLocation({ query: 'london' }));

    expect(store.getState().home.isSearching).toBeTruthy();

    await Promise.resolve(promise);

    expect(store.getState().home.error).toBeTruthy();
  });

  test('should dispatch get location and return success state', async () => {
    const expectedResponse = {
      consolidated_weather: [
        {
          id: 5102173131112448,
          applicable_date: '2021-04-04',
          min_temp: 2.055,
          max_temp: 15.66,
        },
      ],
      parent: {
        title: 'England',
        location_type: 'Region / State / Province',
        woeid: 24554868,
        latt_long: '52.883560,-1.974060',
      },
      title: 'London',
    };

    mock.onGet('/location/123/').replyOnce(200, expectedResponse);

    expect(store.getState().home.isLoading).toBeFalsy();

    const promise = store.dispatch(getLocation(123));

    expect(store.getState().home.isLoading).toBeTruthy();

    await Promise.resolve(promise);

    expect(store.getState().home.error).toBeFalsy();
    expect(store.getState().home.locationData).toEqual(expectedResponse);
  });

  test('should dispatch get location and return error state', async () => {
    mock.onGet('/location/123/').networkErrorOnce();

    const promise = store.dispatch(getLocation(123));

    expect(store.getState().home.isLoading).toBeTruthy();

    await Promise.resolve(promise);

    expect(store.getState().home.error).toBeTruthy();
  });
});
