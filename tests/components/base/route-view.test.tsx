import React from 'react';
import { RouterView } from '@components';
import { cleanup, render } from '../../renderTest';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('<RouteView />', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<RouterView routes={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without issue', () => {
    const component = render(<RouterView routes={[]} />);
    expect(component).toBeTruthy();
  });
});
