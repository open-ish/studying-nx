import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import * as HelloNx from '@studying-nx/hello-nx';
import * as AnotherHello from '@studying-nx/another-hello';

import { Route, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="shell" /> */}
      <HelloNx.App />


      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
            {/* sads */}
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />

      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
            <AnotherHello.App />
          </div>
        )}
      />
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;