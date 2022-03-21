import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DsButtonProps {}

const StyledDsButton = styled.div`
  color: pink;
`;

export function DsButton(props: DsButtonProps) {
  return (
    <StyledDsButton>
      <h1>Welcome to DsButton!</h1>
    </StyledDsButton>
  );
}

export default DsButton;
