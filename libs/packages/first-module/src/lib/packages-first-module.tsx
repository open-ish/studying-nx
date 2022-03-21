import styles from './packages-first-module.module.css';
import { DsButton } from '@studying-nx/ds/button';


/* eslint-disable-next-line */
export interface PackagesFirstModuleProps {}

export function PackagesFirstModule(props: PackagesFirstModuleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PackagesFirstModule!</h1>
      <DsButton />
    </div>
  );
}

export default PackagesFirstModule;
