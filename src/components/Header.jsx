import React from 'react';
import '../styles/Header.scss';
import '../styles/MediaQuery.scss';
import logo from '../assets/beat-club-logo-header.png';
import { List, X } from 'react-bootstrap-icons';
import { useRef } from 'react';


const Header = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <nav ref={navRef}>
                <li className="navbar-list">
                    <img src={logo} alt="beat-club logo" href="/" id="logo-header" className='desktop' />
                    <a className="header-link" id="inicio-link" href="/">Inicio</a>
                    <a className="header-link" href="/">Eventos</a>
                    <a className="header-link" href="/">Menu</a>
                    <a className="header-link" href="/">Contacto</a>
                </li>
            </nav>
            <List onClick={showNavbar} className='nav-btn mobile' />
            <img src={logo} alt="beat-club logo" href="/" id="logo-header" className='mobile' />
        </header>
    )
}

export default Header;