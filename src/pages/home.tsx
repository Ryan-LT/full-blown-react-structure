import { State } from '@store';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Weekday } from 'src/types/base/weekday';
import './styles/home.scss';

const Home: FunctionComponent = () => {
  const { locationData } = useSelector((state: State) => state.home);
  return (
    <div className="page-home">
      <div className="search-box">
        <input list="browsers" name="browser" id="browser" />
        <datalist id="browsers">
          <option label="browser" value="Edge" />
          <option label="browser" value="Firefox" />
          <option label="browser" value="Chrome" />
          <option label="browser" value="Opera" />
          <option label="browser" value="Safari" />
        </datalist>
      </div>
      <div className="data-list">
        {locationData?.consolidated_weather.map((item) => {
          const {
            id,
            applicable_date: date,
            min_temp: minTemp,
            max_temp: maxTemp,
          } = item;

          const day = new Date(date).getDay();
          return (
            <div className="data-item" key={id}>
              <p>{Weekday[day]}</p>
              <p>
                Max:
                {maxTemp.toFixed(1)}
                &deg;C
              </p>
              <p>
                Min:
                {minTemp.toFixed(1)}
                &deg;C
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
