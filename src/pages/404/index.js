import React from 'react';
import { Main, /*Page404Layout,*/ ImageContainer, P404Image } from './styles.js';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import ErrorMsg from './components/ErrorMsg';
import P404 from '../../assets/img/P404.png';

function Page404() {
  return (
    <>
      <Menu />
      <Main>
        <ErrorMsg />
        <ImageContainer>
          <P404Image src={P404} alt="404" />
        </ImageContainer>
      </Main>
      <Footer />
    </>
  )
}

export default Page404;
