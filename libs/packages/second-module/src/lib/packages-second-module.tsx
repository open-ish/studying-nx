import styles from './packages-second-module.module.css';
import { MyComponent } from '@studying-nx/my-ds';

/* eslint-disable-next-line */
export interface PackagesSecondModuleProps {}

export function PackagesSecondModule(props: PackagesSecondModuleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PackagesSecondModule!</h1>
      <MyComponent />
    </div>
  );
}

export default PackagesSecondModule;
