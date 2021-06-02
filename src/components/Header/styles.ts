import styled from 'styled-components';

export const Container = styled.header`
  background: ${props => props.theme.colors.blue};
`;

export const Content = styled.div`
  max-width: 1120px;
  // ficar sempre sentralizado
  margin: 0 auto;

  // 1rem equivale ao tamanho do font-fize padrão
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;

  // terá um espaço entre todos os itens dentro do component
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFFFFF;
    background: ${props => props.theme.colors.blue_light};
    border: 0;
    padding: 0 2rem; // espaçamento na dir e esq
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9); // vai escurecer todo o conteudo
    }
    
  }

`;