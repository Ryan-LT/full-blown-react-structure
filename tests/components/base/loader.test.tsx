import React from 'react';
import { Loader } from '@components';
import { cleanup, render } from '../../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('<Loader />', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without issue', () => {
    const component = render(<Loader />);
    expect(component).toBeTruthy();
  });
});
