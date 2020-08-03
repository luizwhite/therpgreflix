import styled, { css } from 'styled-components';
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

  background-color: var(--primary-black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px) {
    height: var(--MenuPaddingTopMobile);
  }
`;

export const HamburguerContainer = styled.div`
  position: relative;

  @media not all and (max-width: 800px) {
    display: none;
  }
`;

export const HamburguerMenu = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  height: 18px;
  width: 22px;

  span {
    position: absolute;
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 30px;
    background: var(--primary);
    transition: transform 0.4s ease-in-out, top 0.4s ease-in-out, opacity 0.4s ease-in-out,
      background-color 1s ease-in-out;
  }

  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 6px;
  }
  span:nth-child(3) {
    top: 12px;
  }
`;

export const MenuLateral = styled.nav`
  background-color: var(--grayDark);
  padding: 1rem 1rem 1rem 1rem;
  margin: 0;

  border-left: 2px solid var(--primary);

  height: 100vh;
  width: 80%;
  max-width: 260px;

  position: fixed;
  z-index: 50;
  top: 0;

  transition: right 0.6s ease-in-out;
  transition-delay: 0s;

  ${({ fechaMenu }) => {
    if (fechaMenu) {
      return (
        fechaMenu
        && css`
          right: -80%;
        `
      );
    }

    return css`
      right: -5%;
    `;
  }}

  ${HamburguerMenu} {
    position: absolute;
    right: 10vw;
    top: 1rem;

    span:nth-child(1) {
      transform: rotate(-45deg);
      top: 6px;
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(45deg);
      top: 6px;
    }
  }

  a {
    position: relative;
    z-index: 50;
    top: 3rem;
    text-decoration: none;
    padding: 1rem 1rem 0.5rem 0;
    display: block;
    /* border-top: 2px solid var(--primary); */
    border-bottom: 2px solid var(--primary);
    font-weight: bold;
    font-size: 1.1rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
    margin-left: 5%;
  }
`;

export const HamburguerDummy = styled.div`
  display: none;
  position: absolute;
  opacity: 0;
  z-index: 50;
  top: 0;
  left: 0;
  height: 18px;
  width: 22px;
  margin: 0;
`;

export const HamburguerCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 100;
  top: 0;
  left: 0;
  height: 18px;
  width: 22px;
  margin: 0;

  &:checked + label span {
    background-color: transparent;
  }
  &:checked + label span:nth-child(1) {
    transform: rotate(-45deg);
    top: 6px;
  }
  &:checked + label span:nth-child(2) {
    opacity: 0;
  }
  &:checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 6px;
  }
  &:checked ~ ${MenuLateral} {
    right: -5%;
    transition-delay: 0.2s;

    ${HamburguerDummy} {
      display: block;
    }

    /* &:before {
      content: '';
      display: block;
      z-index: 0;

      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      background: rgba(0, 0, 0, 0.4);
    } */
  }
`;
