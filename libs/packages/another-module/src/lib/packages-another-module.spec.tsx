import { render } from '@testing-library/react';

import PackagesAnotherModule from './packages-another-module';

describe('PackagesAnotherModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesAnotherModule />);
    expect(baseElement).toBeTruthy();
  });
});
