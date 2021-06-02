import styled from "styled-components";

interface TotalProps {
  isGreen: Number;
}

export const Container = styled.div<TotalProps>`
  // 3 colunas
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // espaçamento entre os grids
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: ${props => props.theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${props => props.theme.colors.text_title};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; // faz o strong se comportar como uma div, assim o margin-top funciona
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem; // ocupar mais espaço
    }

    &.highlight-background {
      background: ${(props) => props.isGreen >= 0 ? props.theme.colors.green : props.theme.colors.red};
      color: #FFFFFF;
    }
  }
`;