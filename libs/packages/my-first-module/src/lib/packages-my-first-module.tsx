import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PackagesMyFirstModuleProps {}

const StyledPackagesMyFirstModule = styled.div`
  color: pink;
`;

export function PackagesMyFirstModule(props: PackagesMyFirstModuleProps) {
  return (
    <StyledPackagesMyFirstModule>
      <h1>Welcome to PackagesMyFirstModule!</h1>
    </StyledPackagesMyFirstModule>
  );
}

export default PackagesMyFirstModule;
