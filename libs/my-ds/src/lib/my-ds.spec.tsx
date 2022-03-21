import { render } from '@testing-library/react';

import MyDs from './my-ds';

describe('MyDs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyDs />);
    expect(baseElement).toBeTruthy();
  });
});
