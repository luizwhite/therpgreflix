import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper, ButtonLink } from './style.js';
// import Button from '../Button'
// import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
  return (
    <MenuWrapper /*className="Menu"*/>
      <a href="/">
        <LogoImage /*className="Logo"*/ src={Logo} alt="MyFlix logo"/>
      </a>

      <ButtonLink as="a" /*className="ButtonLink" href="/"*/>
        Novo Vídeo
      </ButtonLink>
    </MenuWrapper>
  );
}

export default Menu;
