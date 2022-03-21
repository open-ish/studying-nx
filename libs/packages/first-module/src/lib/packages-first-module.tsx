import styles from './packages-first-module.module.css';
import { MyComponent } from '@studying-nx/my-ds';

/* eslint-disable-next-line */
export interface PackagesFirstModuleProps {}

export function PackagesFirstModule(props: PackagesFirstModuleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PackagesFirstModule!</h1>
      <MyComponent />
    </div>
  );
}

export default PackagesFirstModule;
