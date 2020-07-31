import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase, LogoFooterImage } from './styles';
import LogoFooter from '../../assets/img/Logo-footer.png';

function Footer() {
  /* checklater */
  return (
    <FooterBase>
      <Link to="/">
        <LogoFooterImage src={LogoFooter} alt="The RPG Reflix footer logo" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/imersao-react">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
