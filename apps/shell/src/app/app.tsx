import { PackagesHome } from '@studying-nx/packages/home';
import { PackagesAffected } from '@studying-nx/packages/affected';
import { PackagesThirdModule } from '@studying-nx/packages/third-module';

import { Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles';
import { Styles } from './styles';

export function App() {
  return (
    <Styles.App>
      <GlobalStyles />
      <Header />
      <Styles.Content>
        <Route path="/" exact render={() => <PackagesHome />} />
        <Route path="/page-2" exact render={() => <PackagesAffected />} />
        {/* <Route
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
          /> */}
      </Styles.Content>
    </Styles.App>
  );
}

export default App;
