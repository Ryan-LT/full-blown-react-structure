import React from 'react';
import { SearchSelect } from '@components';
import { cleanup, render } from '../../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<SearchSelect />);

  expect(asFragment()).toMatchSnapshot();
});

it('should render without issue', () => {
  const component = render(<SearchSelect />);
  expect(component).toBeTruthy();
});
