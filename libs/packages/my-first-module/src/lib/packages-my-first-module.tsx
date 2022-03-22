import styled from 'styled-components';
import { MyAnotherComponent } from '@studying-nx/ds';


/* eslint-disable-next-line */
export interface PackagesMyFirstModuleProps {}

const StyledPackagesMyFirstModule = styled.div`
  color: pink;
  border: 1px solid pink;
`;

export function PackagesMyFirstModule(props: PackagesMyFirstModuleProps) {
  return (
    <StyledPackagesMyFirstModule>
      <h1>Welcome to PackagesMyFirstModule!!!! (Buildable)</h1>
      <MyAnotherComponent />
    </StyledPackagesMyFirstModule>
  );
}

export default PackagesMyFirstModule;
