import React from 'react';
import { Home } from '@pages';
import { cleanup, render } from '../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Home />);

  expect(asFragment()).toMatchSnapshot();
});
