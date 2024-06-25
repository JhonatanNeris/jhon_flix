import React from 'react'
import { Link } from 'react-router-dom'

//Styled components
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const CadastroVideo = () => {
  return (
    <Main>
      <h1>Cadastro de vídeo</h1>
      <Link to="/cadastro/categoria">
        Nova Categoria
      </Link>
    </Main>
  )
}

export default CadastroVideo