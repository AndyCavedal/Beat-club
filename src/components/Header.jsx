import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/beat-club-logo-header.png'

const Header = () => {
    return (
        <nav>
            <li className="navbar-list">
                <img src={logo} alt="beat-club logo" href="/" id="logo-header" />
                <a className="header-link" href="/">Inicio</a>
                <a className="header-link" href="/">Eventos</a>
                <a className="header-link" href="/">Menu</a>
                <a className="header-link" href="/">Contacto</a>
            </li>
        </nav>
    )
}

export default Header;