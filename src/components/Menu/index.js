import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/LOGOTTFLIX.png';
import './Menu.css';
import Button from '../Button';

// SPA -> simple page application

function Menu(){
    return(
        
        <nav className="Menu">   
            <Link to="/">
                <img class="Logo" src={Logo} alt="TTFlix logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/Video">
                New video
            </Button>
        </nav>
    );
}

export default Menu;
