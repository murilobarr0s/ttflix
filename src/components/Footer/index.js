import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src="https://fontmeme.com/permalink/200728/e9892ee95547036f929515b02a9ce175.png" alt="Logo TTFlix" />
      </a>
      <p>
        TTFLIX - 2020 <br/>
        {' '}
        <a href="https://www.alura.com.br/">
          by Immersion Alura
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
