import styled from 'styled-components';
import { MyComponent } from '@studying-nx/my-ds';
// import {date} from '@studying-nx/helpers/date'

/* eslint-disable-next-line */
export interface PackagesAnotherModuleProps {}

const StyledPackagesAnotherModule = styled.div`
  color: pink;
`;

export function PackagesAnotherModule(props: PackagesAnotherModuleProps) {
  return (
    <StyledPackagesAnotherModule>
      <h1>Welcome to PackagesAnotherModule!!!!</h1>
      <MyComponent />
    </StyledPackagesAnotherModule>
  );
}

export default PackagesAnotherModule;
