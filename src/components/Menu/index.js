import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper/*, ButtonLink*/ } from './style.js';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';
// import './Menu.css';

function Menu() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={Logo} alt="MyFlix logo"/>
      </a>

      <Button as="a" href="/">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
