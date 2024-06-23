import React from 'react';
//Data
import data from "./data/dados_iniciais.json"

//Components
import Menu from './components/Menu/index'
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel'
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

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

      <Footer />
      

    </div>
  );
}

export default App;
