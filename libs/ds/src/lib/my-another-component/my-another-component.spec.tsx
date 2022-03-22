import { render } from '@testing-library/react';

import MyAnotherComponent from './my-another-component';

describe('MyAnotherComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyAnotherComponent />);
    expect(baseElement).toBeTruthy();
  });
});
