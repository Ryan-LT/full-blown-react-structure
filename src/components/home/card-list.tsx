import React, { FunctionComponent } from 'react';
import { WeatherCard } from '@components';
import { useSelector } from 'react-redux';
import { State } from '@store';

import './styles/card-list.scss';

export const CardList: FunctionComponent = () => {
  const { locationData } = useSelector((state: State) => state.home);

  return (
    <div className="data-list">
      {locationData?.consolidated_weather.slice(0, 5).map((item) => {
        const { id } = item;
        return <WeatherCard key={id} {...item} />;
      })}
    </div>
  );
};
