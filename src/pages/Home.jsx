import '../styles/Home.scss';
import Banner from '../components/Banner'
import About from '../components/About'
import GalleryContainer from '../containers/GalleryContainer';
import Entrada from '../components/Entrada';
import Contactanos from '../components/Contactanos';
import EventoCarrousel from '../components/EventoCarrousel';
import React from "react";


const Home = () => {
   
    return (
        <div>
            <div className='home-container'>
                <div className='background'>
                    <div className='contenedor'>
                        <Banner />
                    </div>
                </div>
            </div>
            <div id="about">
                <About />
            </div>
            <hr className='hr-divisor' />
            <EventoCarrousel />
            <GalleryContainer />
            <Entrada />
            <Contactanos />
        </div>
    )
}

export default Home;