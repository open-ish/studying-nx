import { render } from '@testing-library/react';

import PackagesAffected from './PackagesAffected';

describe('PackagesAffected', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesAffected />);
    expect(baseElement).toBeTruthy();
  });
});
