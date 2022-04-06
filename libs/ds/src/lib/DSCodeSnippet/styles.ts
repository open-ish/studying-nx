import styled from 'styled-components';

export const Styles = {
  Pre: styled.pre`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  Code: styled.code`
    width: fit-content;
    background-color: rgba(55, 65, 81, 1);
    border-radius: 0.25rem;
    color: rgba(229, 231, 235, 1);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    padding: 0.5rem 0.75rem;
  `,
};
