import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import { LogoImage, MenuWrapper /* , ButtonLink */ } from './style';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';
// import './Menu.css';

function Menu() {
  return (
    <MenuWrapper>
      <Link to="/">
        <LogoImage src={Logo} alt="MyFlix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo Vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
