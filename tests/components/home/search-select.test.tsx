import React from 'react';
import { SearchSelect } from '@components';
import {
  cleanup, fireEvent, render, waitFor,
} from '../../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<SearchSelect />);

  expect(asFragment()).toMatchSnapshot();
});

it('should render without errors', async () => {
  const { getByText } = render(<SearchSelect />);

  await waitFor(expect(getByText('Search...')).toBeTruthy);
});

it('should be able to search', async () => {
  const { container, getByText } = render(<SearchSelect />);

  const input = container.querySelector('input');

  if (input) {
    fireEvent.change(input, {
      target: { value: 'london' },
    });
  }

  expect(getByText('No options')).toBeTruthy();
});
