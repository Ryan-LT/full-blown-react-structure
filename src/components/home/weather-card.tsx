import React, { FunctionComponent } from 'react';
import { TWeather, Weekday } from '@types';
import { Loader } from '@components';

import './styles/weather-card.scss';
import { useSelector } from 'react-redux';
import { State } from '@store';

export const WeatherCard: FunctionComponent<TWeather> = ({
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
          <p>{Weekday[day]}</p>
          <p>
            Max:
            {maxTemp.toFixed(1)}
            &deg; C
          </p>
          <p>
            Min:
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
