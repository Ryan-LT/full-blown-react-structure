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
      <h1>
        {locationData?.title}
        ,
        {' '}
        {locationData?.parent.title}
      </h1>
      {!isLoading ? (
        <CardList />
      ) : (
        <h1>Getting weather...</h1>
      )}
    </div>
  );
};
export default Home;
