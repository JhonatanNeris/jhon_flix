import React from 'react';
//Data
import data from "../../data/dados_iniciais.json"

//Components
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'


const Home = () => {
    return (
        <>
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
        </>
    )
}

export default Home