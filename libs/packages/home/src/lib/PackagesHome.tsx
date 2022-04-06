import styled from 'styled-components';

import { DSBaseView, DSCodeSnippet } from '@studying-nx/ds';
/* eslint-disable-next-line */
export interface PackagesHomeProps {}

const StyledPackagesHome = styled.section`
  // display: flex;
  // justify-content: flex-star;
`;

export function PackagesHome(props: PackagesHomeProps) {
  return (
    <DSBaseView
      title="Exploring Nx features and its commands"
      shortDescription="Let's take a short look into Nx world"
    >
      <h2>Getting started here?</h2>

      <DSCodeSnippet
        title="See the project structure running"
        code="nx graph"
      />
    </DSBaseView>
  );
}

export default PackagesHome;
