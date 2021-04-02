import React, { FunctionComponent } from 'react';
import { State, searchLocation, getLocation } from '@store';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Weekday } from '@types';
import './styles/home.scss';

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    searchResults, locationData, isSearching, isLoading,
  } = useSelector(
    (state: State) => state.home,
  );
  let timeout: ReturnType<typeof setTimeout>;

  const handleSearchInput = (value: string): void => {
    if (!value) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(searchLocation({ query: value }));
    }, 500);
  };

  const handlePickLocation = ({ value }: any) => {
    dispatch(getLocation(value));
  };
  return (
    <div className="page-home">
      <div className="search-box">
        <Select
          placeholder="Search..."
          options={searchResults.map((item) => ({
            value: item.woeid,
            label: item.title,
          }))}
          isLoading={isSearching}
          onInputChange={handleSearchInput}
          onChange={handlePickLocation}
        />
      </div>
      {locationData && (
        <>
          <h1>
            {locationData.title}
            ,
            {' '}
            {locationData.parent.title}
          </h1>
          {!isLoading ? (
            <div className="data-list">
              {locationData.consolidated_weather.map((item) => {
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
                      &deg; C
                    </p>
                    <p>
                      Min:
                      {minTemp.toFixed(1)}
                      &deg; C
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>Getting weather...</h1>
          )}
        </>
      )}
    </div>
  );
};
export default Home;
