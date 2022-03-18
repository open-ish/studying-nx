import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: red;
`;

export function Ui(props: UiProps) {
  return (
    <StyledUi>
      {/* dasd */}
      <h1>Welcome to Ui!</h1>
    </StyledUi>
  );
}

export default Ui;
