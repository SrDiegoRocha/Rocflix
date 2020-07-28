import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Button from '../Button';

const Menu = () => {
  return (
    <header className="menu">
        <Link to="/">
            <img src={Logo} alt="Rocflix" className="logo"/>
        </Link>

        <Button as={Link} to="/cadastro/video">
            New Video
        </Button>
    </header>
  );
}

export default Menu;
