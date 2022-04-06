import styled from 'styled-components';

export const Styles = {
  CardContainer: styled.div`
    width: 100%;
  `,
  Card: styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px 20px;
    padding-top: 0;
    & :not(:last-child) {
      margin-bottom: 10px;
    }
  `,
};
