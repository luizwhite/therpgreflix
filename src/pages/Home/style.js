import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = styled.main`
  flex: 1;
  color: var(--white);
  /* background-color: var(--grayDark); */
`;

function PageHome({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageHome;
