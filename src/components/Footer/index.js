import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura 
        </a>
      </p>
      <p> 
        <a href="https://github.com/murilobarr0s"> GitHub </a> |
        <a href="https://www.linkedin.com/in/helio-murilo-silva-de-barros-04a742116/"> LinkedIn </a>
     </p>
    </FooterBase>
  );
}

export default Footer;
