import styled from 'styled-components';
import NxWelcome from './nx-welcome';
// import { Ui } from '@studying-nx/ui';

const StyledApp = styled.div`
  color: black;
`;

export function App() {
  return (
      <NxWelcome title="another-hello" />
  );
}

export default App;
