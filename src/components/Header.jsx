import React from 'react';
import '../styles/Header.scss';
import '../styles/MediaQuery.scss';
import logo from '../assets/beat-club-logo-header.png';
import { List, X } from 'react-bootstrap-icons';
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {
    const navRef = useRef();
    const [isNavVisible, setNavVisible] = useState(false);


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

    return (
        <header>
            <nav ref={navRef} className={isNavVisible ? 'responsive_nav' : ''}>
                <ul>
                    <li className="navbar-list">
                        <img src={logo} alt="beat-club logo" href="/" id="logo-header" className="desktop" />
                        <Link className="header-link" id="inicio-link" to="/" onClick={hideNavbar}>
                            Inicio
                        </Link>
                        <Link className="header-link" to="/eventos" onClick={hideNavbar}>
                            Eventos
                        </Link>
                        <Link className="header-link" to="/menu" onClick={hideNavbar}>
                            Menu
                        </Link>
                        <ScrollLink
                            className="header-link"
                            to="section-social"
                            smooth={true}
                            duration={500}
                            onClick={hideNavbar}
                        >
                            Contacto
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
            <List onClick={showNavbar} className="nav-btn mobile" />
            <img src={logo} alt="beat-club logo" href="/" id="logo-header" className="mobile" />
        </header>
    )
}

export default Header;