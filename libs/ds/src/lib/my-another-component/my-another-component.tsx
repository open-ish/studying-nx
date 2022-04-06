import styled from 'styled-components';
import Button from '@mui/material/Button';
/* eslint-disable-next-line */
export interface MyAnotherComponentProps {}

const StyledMyAnotherComponent = styled.div`
  color: green;
  border: 1px solid green;
  margin: 10px;
`;

export function MyAnotherComponent(props: MyAnotherComponentProps) {
  return (
    <StyledMyAnotherComponent>
      <h1>This component is Buildable and comes from DS </h1>
      <Button variant="contained">Contained</Button>
    </StyledMyAnotherComponent>
  );
}

export default MyAnotherComponent;
