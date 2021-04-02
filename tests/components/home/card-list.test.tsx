import React from 'react';
import { CardList } from '@components';
import { cleanup, render } from '../../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<CardList />);

  expect(asFragment()).toMatchSnapshot();
});

it('should render without issue', () => {
  const component = render(<CardList />);
  expect(component).toBeTruthy();
});
