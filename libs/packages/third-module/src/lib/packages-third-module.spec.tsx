import { render } from '@testing-library/react';

import PackagesThirdModule from './packages-third-module';

describe('PackagesThirdModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesThirdModule />);
    expect(baseElement).toBeTruthy();
  });
});
