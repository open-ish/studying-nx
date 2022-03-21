import { render } from '@testing-library/react';

import PackagesSecondModule from './packages-second-module';

describe('PackagesSecondModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesSecondModule />);
    expect(baseElement).toBeTruthy();
  });
});
