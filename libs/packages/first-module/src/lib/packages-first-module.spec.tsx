import { render } from '@testing-library/react';

import PackagesFirstModule from './packages-first-module';

describe('PackagesFirstModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesFirstModule />);
    expect(baseElement).toBeTruthy();
  });
});
