import styled from 'styled-components';

import { MyAnotherComponent } from '@studying-nx/ds';
import { PackagesAnotherModule } from '@studying-nx/packages/another-module';
import { PackagesMyFirstModule } from '@studying-nx/packages/my-first-module';
import { PackagesThirdModule } from '@studying-nx/packages/third-module';

import { Route, Link } from 'react-router-dom';

const StyledApp = styled.div`
  border: 1px solid red;
  padding: 10px;
`;

export function App() {
  return (
    <StyledApp>
      <h1>Shell</h1>
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
          <li>
            <Link to="/page-3">Page 3</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <PackagesMyFirstModule />
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <PackagesAnotherModule />
          </div>
        )}
      />
      <Route
        path="/page-3"
        exact
        render={() => (
          <div>
            <PackagesThirdModule />
          </div>
        )}
      />
    </StyledApp>
  );
}

export default App;
