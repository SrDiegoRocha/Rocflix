import React from 'react';
import './styles.css';

import Logo from '../../assets/logo.png';
import Button from '../Button';

const Menu = () => {
  return (
    <header className="menu">
        <a href="/">
            <img src={Logo} alt="Rocflix" className="logo"/>
        </a>

        <Button as="a" href="/">
            New Video
        </Button>
    </header>
  );
}

export default Menu;
