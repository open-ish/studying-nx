import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Ui } from '@studying-nx/ui';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Ui />
      <NxWelcome title="another-hello" />
    </StyledApp>
  );
}

export default App;
