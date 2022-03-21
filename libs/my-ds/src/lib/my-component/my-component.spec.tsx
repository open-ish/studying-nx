import { render } from '@testing-library/react';

import MyComponent from './my-component';

describe('MyComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyComponent />);
    expect(baseElement).toBeTruthy();
  });
});
