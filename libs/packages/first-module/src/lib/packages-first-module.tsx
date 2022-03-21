import styles from './packages-first-module.module.css';
import { Button } from '@studying-nx/ds/button';


/* eslint-disable-next-line */
export interface PackagesFirstModuleProps {}

export function PackagesFirstModule(props: PackagesFirstModuleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PackagesFirstModule!</h1>
      <Button />
    </div>
  );
}

export default PackagesFirstModule;
