import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MyComponentProps {}

const StyledMyComponent = styled.div`
  color: green;
`;

export function MyComponent(props: MyComponentProps) {
  return (
    <StyledMyComponent>
      <h1>Welcome to MyComponent!</h1>
    </StyledMyComponent>
  );
}

export default MyComponent;
