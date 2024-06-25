import React from 'react'

//Styled components
import styled from 'styled-components';

//React Router Dom
import { Link } from 'react-router-dom';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const Pagina404 = () => {
  return (
    <Main>
      <h1>Página não encontrada - 404</h1>
      <Link to="/">
        Ir para a home
      </Link>
    </Main>
  )
}

export default Pagina404