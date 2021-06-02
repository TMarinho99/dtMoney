import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  

  table {
    width: 100%;
    border-spacing: 0 0.5rem; // distância na tabela

    th {
      color: ${props => props.theme.colors.text_body};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${props => props.theme.colors.shape};
      color: ${props => props.theme.colors.text_body};
      border-radius: 0.25rem;

      &:first-child {
        color: ${props => props.theme.colors.text_title};
      }

      &.deposit {
        color: ${props => props.theme.colors.green};
      }

      &.withdraw {
        color: ${props => props.theme.colors.red};
      }
    }
  }
`;