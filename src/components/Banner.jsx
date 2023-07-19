import React from 'react';
import '../styles/Banner.scss';
import beat from '../assets/beat-club-logo-header.png'
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className='contenedor-banner'>
            <div>
                <img src={beat} alt="a" />
            </div>
            <p>Sabores y música en vivo en un solo lugar.</p>
            <p>¡Te esperamos!</p>
            <hr></hr>
            <p className='banner-text'>cena - show - tragos</p>
            <div className='banner-btn'>
                <Link to='/contacto' className='btn'>Contactanos</Link>
            </div>
            <p className='banner-direccion'>Av. Perú 1775, M5500 Mendoza</p>
        </div>
    )
}

export default Banner;