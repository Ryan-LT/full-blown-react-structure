import { State } from '@store';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

const Home: FunctionComponent = () => {
  const { title } = useSelector((state: State) => state.home);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Home;
