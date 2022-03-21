import styled from 'styled-components';

import { PackagesFirstModule } from '@studying-nx/packages/first-module';
import { PackagesSecondModule } from '@studying-nx/packages/second-module';
import { DsButton } from '@studying-nx/ds/button';

import { Route, Link } from 'react-router-dom';

const StyledApp = styled.div`
  border: 1px solid red;
  padding: 10px;
`;

export function App() {
  return (
    <StyledApp>
      <h1>Shell</h1>
      {/* <DsButton /> */}
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <PackagesFirstModule />
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <PackagesSecondModule />
          </div>
        )}
      />
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
