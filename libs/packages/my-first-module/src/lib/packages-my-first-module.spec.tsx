import { render } from '@testing-library/react';

import PackagesMyFirstModule from './packages-my-first-module';

describe('PackagesMyFirstModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesMyFirstModule />);
    expect(baseElement).toBeTruthy();
  });
});
