import React from 'react';

//Components
import Menu from './components/Menu/index'
//import BannerMain from './components/BannerMain';
//import Carousel from './components/Carousel'
import Footer from './components/Footer';

//Pages
import Home from './pages/Home/index';
import CadastroVideo from './pages/CadastroVideo';
import Pagina404 from './pages/Pagina404';
import CadastroCategoria from './pages/CadastroCategoria';

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro/video' element={<CadastroVideo />} />
          <Route path='/cadastro/categoria' element={<CadastroCategoria />} />
          <Route path='*' element={<Pagina404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
