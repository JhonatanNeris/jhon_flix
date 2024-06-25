import React from 'react';
//Data
import data from "../../data/dados_iniciais.json"

//Components
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'

//Styled components
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  /* padding-top: 50px; */
  /* padding-left: 5%; */
  /* padding-right: 5%; */
`;

const Home = () => {
    return (
        <Main>
            <BannerMain
                videoTitle={data.categorias[0].videos[0].titulo}
                url={data.categorias[0].videos[0].url}
                videoDescription={"O que é Front-end? Trabalhando na área"}
            />

            <Carousel
                ignoreFirstVideo
                category={data.categorias[0]}
            />
            <Carousel

                category={data.categorias[1]}
            />
            <Carousel

                category={data.categorias[2]}
            />
            <Carousel
                ignoreFirstVideo
                category={data.categorias[3]}
            />
            <Carousel

                category={data.categorias[4]}
            />
            <Carousel

                category={data.categorias[5]}
            />
        </Main>
    )
}

export default Home