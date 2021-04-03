import React from 'react';
import { WeatherCard } from '@components';
import { cleanup, render } from '../../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('<WeatherCard />', () => {
  it('should take a snapshot', () => {
    const testProps = {
      applicable_date: 'Fri Apr 02 2021 17:18:04 GMT+0700',
      min_temp: 16,
      max_temp: 23,
    };
    const { asFragment } = render(<WeatherCard {...testProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without issue', () => {
    const testProps = {
      applicable_date: new Date().toString(),
      min_temp: 16,
      max_temp: 23,
    };
    const component = render(<WeatherCard {...testProps} />);
    expect(component).toBeTruthy();
  });

  it('should have max temp', () => {
    const testProps = {
      applicable_date: new Date().toString(),
      min_temp: 16,
      max_temp: 23,
    };
    const { getByTestId } = render(<WeatherCard {...testProps} />);
    expect(getByTestId('max-temp')).toHaveTextContent('23');
  });

  it('should have min temp', () => {
    const testProps = {
      applicable_date: new Date().toString(),
      min_temp: 16,
      max_temp: 23,
    };
    const { getByTestId } = render(<WeatherCard {...testProps} />);
    expect(getByTestId('min-temp')).toHaveTextContent('16');
  });

  it('should show Friday', () => {
    const testProps = {
      applicable_date: 'Fri Apr 02 2021 17:18:04 GMT+0700',
      min_temp: 16,
      max_temp: 23,
    };
    const { getByTestId } = render(<WeatherCard {...testProps} />);
    expect(getByTestId('card-day')).toHaveTextContent('Friday');
  });
});
