import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DsButtonProps {}

const StyledDsButton = styled.div`
  color: green;
`;

export function DsButton(props: DsButtonProps) {
  return (
    <StyledDsButton>
      <h1>My Ds!</h1>
    </StyledDsButton>
  );
}

export default DsButton;
