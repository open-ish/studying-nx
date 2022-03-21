import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PackagesThirdModuleProps {}

const StyledPackagesThirdModule = styled.div`
  color: pink;
`;

export function PackagesThirdModule(props: PackagesThirdModuleProps) {
  return (
    <StyledPackagesThirdModule>
      <h1>Welcome to PackagesThirdModule!</h1>
    </StyledPackagesThirdModule>
  );
}

export default PackagesThirdModule;
