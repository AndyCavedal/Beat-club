import React from 'react';
import '../styles/Banner.scss';
import beat from '../assets/beat-club-logo-header.png';
import { Link as ScrollLink } from 'react-scroll';


const Banner = () => {
    return (
        <div className='contenedor-banner' data-aos="zoom-in">
            <div>
                <img src={beat} alt="logo beat" />
            </div>
            <p>Sabores y música en vivo en un solo lugar.</p>
            <p>¡Te esperamos!</p>
            <hr></hr>
            <p className='banner-text'>cena - show - tragos</p>
            <div className='banner-btn'>

                <ScrollLink
                    to="about-section" // ID del elemento al que deseas desplazarte
                    smooth={true}
                    offset={-40} // Ajusta el desplazamiento según tus necesidades
                    duration={500} // Duración de la animación en milisegundos
                >
                    <a href='/' target='_blank' className='btn'>Conocenos!</a>
                </ScrollLink>
            </div>
            <p className='banner-direccion'>Av. Perú 1773, M5500 Mendoza</p>
        </div>
    )
}

export default Banner;