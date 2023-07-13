import React from 'react';
import '../styles/Home.scss';
import neon from '../assets/logoneon.svg';
import beat from '../assets/beat-club-logo-header.png'
import { Link } from "react-router-dom";


const Home = () =>{

    
    return(
        <div className='background'>
            <div className='contenedor-banner'>
                <div>
                    <img src={beat} alt="a" />
                </div>
                <p>Sabores y música en vivo en un solo lugar.</p>
                <p>¡Te esperamos!</p>
                <hr></hr>
                <div className='banner-btn'>
                    <Link to='/contacto' className='btn'>Contactanos</Link>
                </div>
                <p className='banner-direccion'>Av. Perú 1775, M5500 Mendoza</p>
            </div>
        </div>
    )
}


export default Home;