import React, { useEffect, useState } from 'react';

//Components
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'

//Styled components
import styled from 'styled-components';

import categoriasRepository from '../../repositories/categories';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  /* padding-top: 50px; */
  /* padding-left: 5%; */
  /* padding-right: 5%; */
`;

const Home = () => {

    const [dadosIniciais, setDadosIniciais] = useState([]);

    const url = "http://localhost:8080/categorias?_embed=videos"

    useEffect(() => {
        // http://localhost:8080/categorias?_embed=videos
        categoriasRepository.getAllWithVideos()
            .then((categoriasComVideos) => {
                setDadosIniciais(categoriasComVideos);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <Main>

            {dadosIniciais.length === 0 && (<div>Loading...</div>)}

            {dadosIniciais.map((categoria, indice) => {
                if (indice === 0) {
                    return (
                        <div key={categoria.id}>
                            <BannerMain
                                videoTitle={dadosIniciais[0].videos[0].titulo}
                                url={dadosIniciais[0].videos[0].url}
                                videoDescription={dadosIniciais[0].videos[0].description}
                            />
                            <Carousel
                                ignoreFirstVideo
                                category={dadosIniciais[0]}
                            />
                        </div>
                    );
                }

                return (
                    <Carousel
                        key={categoria.id}
                        category={categoria}
                    />
                );
            })}


            {/* <BannerMain
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
            /> */}
        </Main>
    )
}

export default Home