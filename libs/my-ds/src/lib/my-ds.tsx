import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MyDsProps {}

const StyledMyDs = styled.div`
  color: pink;
`;

export function MyDs(props: MyDsProps) {
  return (
    <StyledMyDs>
      <h1>Welcome to MyDs!</h1>
    </StyledMyDs>
  );
}

export default MyDs;
