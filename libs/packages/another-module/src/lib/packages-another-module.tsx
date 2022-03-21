import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PackagesAnotherModuleProps {}

const StyledPackagesAnotherModule = styled.div`
  color: pink;
`;

export function PackagesAnotherModule(props: PackagesAnotherModuleProps) {
  return (
    <StyledPackagesAnotherModule>
      <h1>Welcome to PackagesAnotherModule!</h1>
    </StyledPackagesAnotherModule>
  );
}

export default PackagesAnotherModule;
