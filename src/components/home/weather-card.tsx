import React, { FunctionComponent } from 'react';
import { TWeather, Weekday } from '@types';

import './styles/weather-card.scss';

export const WeatherCard: FunctionComponent<TWeather> = ({
  applicable_date: date,
  min_temp: minTemp,
  max_temp: maxTemp,
}) => {
  const day = new Date(date).getDay();
  return (
    <div className="weather-card">
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
    </div>
  );
};
