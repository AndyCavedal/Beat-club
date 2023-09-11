import React from 'react';
import '../styles/Banner.scss';
import beat from '../assets/beat-club-logo-header.png';
import { Link as ScrollLink } from 'react-scroll';


const Banner = () => {
    return (
        <div className='contenedor-banner' data-aos="zoom-in">
            <div>
                <img src={beat} alt="Logotipo de Beat Club" />
            </div>
            <p>Sabores y música en vivo en un solo lugar.</p>
            <p>¡Te esperamos!</p>
            <hr></hr>
            <p className='banner-text'>cena - show - tragos</p>
            <div className='banner-btn'>

                <ScrollLink
                    to="about-section"
                    smooth={true}
                    offset={-40}
                    duration={500}
                >
                    <div className='btn'>Conocenos!</div>
                </ScrollLink>
            </div>
            <p className='banner-direccion'>Av. Perú 1773, M5500 Mendoza</p>
        </div>
    )
}

export default Banner;