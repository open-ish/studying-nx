import { render } from '@testing-library/react';

import PackagesHome from './PackagesHome';

describe('PackagesHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesHome />);
    expect(baseElement).toBeTruthy();
  });
});
