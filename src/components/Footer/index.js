import React from 'react';

//Styled components
import { FooterLogo, FooterBase, FooterImage } from './styles';

//Import Logo
import Logo from '../../assets/img/Logo.png'


function Footer() {
  return (
    <FooterBase>
      <FooterLogo to="/">
        <FooterImage src={Logo} alt="Logo JHONFLIX"/>
      </FooterLogo>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
