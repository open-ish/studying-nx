import styled from 'styled-components';
import { MyAnotherComponent } from '@studying-nx/ds';

/* eslint-disable-next-line */
export interface PackagesThirdModuleProps {}

const StyledPackagesThirdModule = styled.div`
  color: pink;
  border: 1px solid pink;
`;

export function PackagesThirdModule(props: PackagesThirdModuleProps) {
  return (
    <StyledPackagesThirdModule>
      <h1>Welcome to PackagesThirdModule! (not buildable one)</h1>
      <MyAnotherComponent />
    </StyledPackagesThirdModule>
  );
}

export default PackagesThirdModule;
