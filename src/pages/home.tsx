import React, { FunctionComponent, useEffect } from 'react';
import { getLocation, State } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import './styles/home.scss';
import { CardList, SearchSelect } from '@components';

const Home: FunctionComponent = () => {
  const { locationData, isLoading } = useSelector((state: State) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation(1252431));
  }, []);
  return (
    <div className="page-home">
      <SearchSelect />
      {!isLoading && locationData ? (
        <h1>
          {locationData?.title}
          ,
          {' '}
          {locationData?.parent.title}
        </h1>
      ) : (
        <h1 className="loading-title">Getting weather...</h1>
      )}
      <CardList />
    </div>
  );
};
export default Home;
