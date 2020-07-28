import React from 'react';
import Menu from './components/Menu';
import styled from 'styled-components';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  padding-top: 94px;
  background: var(--grayDark);

  @media (max-width: 800px) {
    padding-top: var(--MenuPaddingTopMobile);
  }
`;

function App() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"In-Game environment surrounding the metropolis from the \"Art of War\" trailer."}
      />

      <Carousel ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />

    </AppWrapper>
  );
}

export default App;
