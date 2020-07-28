import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';
function Menu(){
    return(
        
        <nav className="Menu">   
            <a href="/">
                <img class="Logo" src={Logo} alt="TTFlix logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                New vídeo
            </Button>
        </nav>
    );
}

export default Menu;
