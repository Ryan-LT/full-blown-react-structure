import React from 'react';
import { Home } from '@pages';
import { cleanup, render } from '../renderTest';
import '@testing-library/jest-dom';
import { fireEvent, waitFor } from '@testing-library/dom';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<Home />);

  expect(asFragment()).toMatchSnapshot();
});

it('should render without errors', async () => {
  const { getByText } = render(<Home />);

  await waitFor(expect(getByText('Search...')).toBeTruthy);
});

it('should be able to search', async () => {
  const { container, getByText } = render(<Home />);

  const input = container.querySelector('input');

  if (input) fireEvent.change(input, {
    target: { value: 'london' },
  });

  expect(getByText('No options')).toBeTruthy;
});
