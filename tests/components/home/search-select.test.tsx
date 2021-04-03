import React from 'react';
import '@testing-library/jest-dom';
import { SearchSelect } from '@components';
import { state as mockState } from './mocks';
import {
  cleanup, fireEvent, render, waitFor,
} from '../../renderTest';

afterEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<SearchSelect />);

  expect(asFragment()).toMatchSnapshot();
});

it('should render without errors', async () => {
  const { getByText } = render(<SearchSelect />, mockState);

  await waitFor(expect(getByText('Search...')).toBeTruthy);
});

it('should be able to search for an option', () => {
  const { container, getByText } = render(<SearchSelect />, mockState);

  const inputSelect = container.querySelector('input');

  expect(inputSelect).not.toBe(null);

  fireEvent.change(inputSelect!, {
    target: { value: 'lo' },
  });

  expect(getByText('London')).toBeTruthy();
});

it('should show "No option" when result is not found', async () => {
  const { container, getByText } = render(<SearchSelect />);

  const input = container.querySelector('input');

  if (input) {
    fireEvent.change(input, {
      target: { value: 'hanoi' },
    });
  }

  expect(getByText('No options')).toBeTruthy();
});
