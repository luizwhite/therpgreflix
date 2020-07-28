import styled from 'styled-components';
// import Button from '../Button';

export const LogoImage = styled.img`
  max-width: 350px;

  @media (max-width: 800px) {
    max-width: 200px;
    margin-top: 5px;
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;

  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background-color: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: var(--MenuPaddingTopMobile);
    justify-content: center;
  }
`;
