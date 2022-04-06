import { render } from '@testing-library/react';

import DSCodeSnippet from './DSCodeSnippet';

describe('DSCodeSnippet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DSCodeSnippet />);
    expect(baseElement).toBeTruthy();
  });
});
