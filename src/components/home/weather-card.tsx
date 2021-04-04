import React, { Fragment, FunctionComponent } from 'react';
import { TWeather, Weekday } from '@types';
import { Loader } from '@components';

import './styles/weather-card.scss';
import { useSelector } from 'react-redux';
import { State } from '@store';

type WeatherCardProp = Pick<
TWeather,
'applicable_date' | 'min_temp' | 'max_temp'
>;

export const WeatherCard: FunctionComponent<WeatherCardProp> = ({
  applicable_date: date,
  min_temp: minTemp,
  max_temp: maxTemp,
}) => {
  const { isLoading } = useSelector((state: State) => state.home);
  const day = new Date(date).getDay();

  return (
    <div className="weather-card">
      {!isLoading ? (
        <>
          <p data-testid="card-day">{Weekday[day]}</p>
          <p data-testid="max-temp">
            Max:
            {' '}
            {maxTemp.toFixed(1)}
            &deg; C
          </p>
          <p data-testid="min-temp">
            Min:
            {' '}
            {minTemp.toFixed(1)}
            &deg; C
          </p>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
