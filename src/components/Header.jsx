import React from 'react';
import '../styles/Header.scss';
import '../styles/MediaQuery.scss';
import logo from '../assets/beat-club-logo-header.png';
import { List, X } from 'react-bootstrap-icons';
import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';


const Header = () => {
    const navRef = useRef();
    const [isNavVisible, setNavVisible] = useState(false);

    const location = useLocation()

    const handleTouchMove = () => {
        setNavVisible(false);
    }

    useEffect(() => {
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('touchmove', handleTouchMove)
        }
    }, [])

    const showNavbar = () => {
        setNavVisible(!isNavVisible)
    }

    const hideNavbar = () => {
        setNavVisible(false);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header>
            <nav ref={navRef} className={isNavVisible ? 'responsive_nav' : ''}>
                <ul>
                    <li className="navbar-list">
                        <Link to='/'>
                            <img src={logo} alt="Logotipo de Beat Club" id="logo-header" className="desktop" />
                        </Link>
                        <Link className="header-link" id="inicio-link" to="/" onClick={hideNavbar}>
                            Inicio
                        </Link>
                        <Link className="header-link" to="/eventos" onClick={hideNavbar}>
                            Eventos
                        </Link>
                        <Link className="header-link" to="/menu" onClick={hideNavbar}>
                            Menu
                        </Link>
                        <Link className="header-link" to="/contacto" onClick={hideNavbar}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='logo-container-menu'>
            <div className="background-shape-menu"></div>
            <List onClick={showNavbar} className="nav-btn mobile" />
            </div>
            <Link to="/" onClick={scrollToTop}>
                <div className="logo-container">
                    <div className="background-shape"></div>
                    <img src={logo} alt="Logotipo de Beat Club" id="logo-header" className="mobile" />
                </div>
            </Link>
        </header>
    )
}

export default Header;