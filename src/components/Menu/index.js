import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import {
  LogoImage,
  MenuWrapper,
  HamburguerContainer,
  HamburguerMenu,
  HamburguerCheckbox,
  HamburguerDummy,
  MenuLateral, /* , ButtonLink */
} from './style';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';
// import './Menu.css';

function Menu() {
  // let closeMenu = true;
  const [closeMenu, setCloseMenu] = useState(true);

  function handleChange() {
    if (document.getElementById('root').classList.contains('menu-ativo')) {
      document.getElementById('root').classList.remove('menu-ativo');
      setCloseMenu(true);
    } else {
      document.getElementById('root').classList.add('menu-ativo');
      setCloseMenu(false);
    }
  }

  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="MyFlix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo Vídeo
      </Button>
      <HamburguerContainer>
        <HamburguerCheckbox
          onChange={handleChange}
          type="checkbox"
        />

        <HamburguerMenu htmlFor={HamburguerCheckbox}>
          <span />
          <span />
          <span />
        </HamburguerMenu>
        <MenuLateral
          fechaMenu={closeMenu}
        >
          <HamburguerDummy />
          <HamburguerMenu>
            <span />
            <span />
            <span />
          </HamburguerMenu>
          <Link to="/cadastro/categoria" onClick={handleChange}>
            <span>Nova Categoria</span>
          </Link>
          <Link to="/cadastro/video" onClick={handleChange}>
            <span>Novo Vídeo</span>
          </Link>
        </MenuLateral>
      </HamburguerContainer>
    </MenuWrapper>
  );
}

export default Menu;
