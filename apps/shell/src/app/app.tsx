import { PackagesHome } from '@studying-nx/packages/home';
import { PackagesAffected } from '@studying-nx/packages/affected';

import { Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header/Header';
import './styles/GlobalStyles.css';
import { Styles } from './styles';

export function App() {
  return (
    <Styles.App>
      <Header />
      <Styles.Content>
        <Routes>
          <Route path="/" element={<PackagesHome />} />
          <Route path="/page-2" element={<PackagesAffected />} />
        </Routes>
      </Styles.Content>
    </Styles.App>
  );
}

export default App;
