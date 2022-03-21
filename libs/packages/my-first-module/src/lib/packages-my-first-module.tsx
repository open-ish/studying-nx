import styled from 'styled-components';
// import { MyComponent } from '@studying-nx/my-ds';

/* eslint-disable-next-line */
export interface PackagesMyFirstModuleProps {}

const StyledPackagesMyFirstModule = styled.div`
  color: pink;
`;

export function PackagesMyFirstModule(props: PackagesMyFirstModuleProps) {
  return (
    <StyledPackagesMyFirstModule>
      <h1>Welcome to PackagesMyFirstModule!!!!</h1>
      {/* <MyComponent /> */}
    </StyledPackagesMyFirstModule>
  );
}

export default PackagesMyFirstModule;
