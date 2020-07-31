import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  color: var(--white);
  /* background-color: var(--grayDark); */
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main className="mainSection">{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
