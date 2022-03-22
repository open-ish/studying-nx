import styled from 'styled-components';
import { MyAnotherComponent } from '@studying-nx/ds';

/* eslint-disable-next-line */
export interface PackagesAnotherModuleProps {}

const StyledPackagesAnotherModule = styled.div`
  color: pink;
  border: 1px solid pink;
`;

export function PackagesAnotherModule(props: PackagesAnotherModuleProps) {
  return (
    <StyledPackagesAnotherModule>
      <h1>Welcome to PackagesAnotherModule!! (Buildable)</h1>
      <MyAnotherComponent />
    </StyledPackagesAnotherModule>
  );
}

export default PackagesAnotherModule;
