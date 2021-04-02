import React from 'react';
import { Loader } from '@components';
import { cleanup, render } from '../../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Loader />);

  expect(asFragment()).toMatchSnapshot();
});
