import React, { useEffect, useState } from 'react';
import categsRepository from '../../repositories/categorias';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageHome from './style';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categsRepository
      .getAllWithVideos()
      .then((categsComVideos) => {
        setDadosIniciais(categsComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <ScrollToTopOnMount />
      <PageHome>
        {dadosIniciais.length === 0 && (<div>Loading...</div>)}

        {dadosIniciais.map((categoria, index) => {
          if (index === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={
                    'In-Game environment surrounding the metropolis from the "Art of War" trailer.'
                  }
                />
                <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
              </div>
            );
          }

          return (
            <>
              <Carousel
                key={categoria.id}
                category={categoria}
              />
            </>
          );
        })}
      </PageHome>
    </>
  );
}

export default Home;
