import styles from './packages-second-module.module.css';
import { DsButton } from '@studying-nx/ds/button';

/* eslint-disable-next-line */
export interface PackagesSecondModuleProps {}

export function PackagesSecondModule(props: PackagesSecondModuleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PackagesSecondModule!</h1>
      <DsButton />
    </div>
  );
}

export default PackagesSecondModule;
