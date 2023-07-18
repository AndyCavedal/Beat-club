import React from 'react';
import '../styles/Header.scss';
import '../styles/MediaQuery.scss';
import logo from '../assets/beat-club-logo-header.png';
import { List, X } from 'react-bootstrap-icons';
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    const navRef = useRef();
    const [isNavVisible, setNavVisible] = useState(false);


    const handleTouchMove = () =>{
        setNavVisible(false);
    }

    useEffect(()=>{
        window.addEventListener('touchmove', handleTouchMove);

        return () =>{
            window.removeEventListener('touchmove', handleTouchMove)
        }
    }, [])

    const showNavbar = () => {
        setNavVisible(!isNavVisible)
    }

    return (
        <header>
            <nav ref={navRef} className={isNavVisible ? 'responsive_nav' : ''}>
                <li className="navbar-list">
                    <img src={logo} alt="beat-club logo" href="/" id="logo-header" className='desktop' />
                    <Link className="header-link" id="inicio-link" to="/">Inicio</Link>
                    <Link className="header-link" to="/eventos">Eventos</Link>
                    <Link className="header-link" to="/menu">Menu</Link>
                    <Link className="header-link" to="/contacto">Contacto</Link>
                </li>
            </nav>
            <List onClick={showNavbar} className='nav-btn mobile' />
            <img src={logo} alt="beat-club logo" href="/" id="logo-header" className='mobile' />
        </header>
    )
}

export default Header;