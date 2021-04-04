import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import { Home } from '@pages';
import { fireEvent } from '@testing-library/dom';
import { cleanup, render, screen } from '../renderTest';

afterEach(cleanup);

const mock = new MockAdapter(axios);

describe('<Home />', () => {
  describe('Simple Render', () => {
    it('should take a snapshot', () => {
      const { asFragment } = render(<Home />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render without errors', () => {
      const component = render(<Home />);

      expect(component).toBeTruthy();
    });
  });

  describe('Event Handler', () => {
    beforeEach(() => {
      mock.reset();
    });

    it('should be able to search and render options', async () => {
      const mockResponse = [
        {
          title: 'London',
          location_type: 'City',
          woeid: 44418,
          latt_long: '51.506321,-0.12714',
        },
        {
          title: 'Barcelona',
          location_type: 'City',
          woeid: 753692,
          latt_long: '41.385578,2.168740',
        },
        {
          title: 'Long Beach',
          location_type: 'City',
          woeid: 2441472,
          latt_long: '33.766720,-118.192398',
        },
      ];

      mock
        .onGet('/location/search/', { params: { query: 'lon' } })
        .replyOnce(200, mockResponse);

      const { container, getByText } = render(<Home />);

      const input = container.querySelector('input');

      expect(input).toBeTruthy();

      fireEvent.change(input!, { target: { value: 'lon' } });

      await screen.findByText('London');

      expect(getByText('London')).toBeTruthy();
      expect(getByText('Barcelona')).toBeTruthy();
      expect(getByText('Long Beach')).toBeTruthy();
    });

    it('should be able to select an option and return result', async () => {
      const mockSearchResponse = [
        {
          title: 'London',
          location_type: 'City',
          woeid: 44418,
          latt_long: '51.506321,-0.12714',
        },
      ];

      const mockGetResponse = {
        consolidated_weather: [
          {
            id: 5102173131112448,
            applicable_date: '2021-04-04',
            min_temp: 2,
            max_temp: 15,
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

      mock
        .onGet('/location/search/', { params: { query: 'london' } })
        .replyOnce(200, mockSearchResponse);
      mock.onGet('/location/44418/').replyOnce(200, mockGetResponse);

      const { container, getByText, getByTestId } = render(<Home />);

      const input = container.querySelector('input');

      expect(input).toBeTruthy();

      fireEvent.change(input!, { target: { value: 'london' } });

      await screen.findByText('London');

      const option = getByText('London');

      fireEvent.click(option);

      await screen.findByText('London, England');

      expect(getByText('London')).toBeTruthy();
      expect(getByTestId('card-day')).toHaveTextContent('Sunday');
      expect(getByTestId('max-temp')).toHaveTextContent('15');
      expect(getByTestId('min-temp')).toHaveTextContent('2');
    });
  });
});
