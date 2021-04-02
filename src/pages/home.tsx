import React, { FunctionComponent } from 'react';
import { State } from '@store';
import { useSelector } from 'react-redux';
import './styles/home.scss';
import { CardList, SearchSelect } from '@components';

const Home: FunctionComponent = () => {
  const { locationData, isLoading } = useSelector((state: State) => state.home);
  return (
    <div className="page-home">
      <SearchSelect />
      {!isLoading ? (
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
