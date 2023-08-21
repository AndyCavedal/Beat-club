import '../styles/Home.scss';
import Banner from '../components/Banner'
import About from '../components/About'
import GalleryContainer from '../containers/GalleryContainer';
import Entrada from '../components/Entrada';
//import Contactanos from '../components/Contactanos';
import Mapa from '../components/Mapa';
import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll al principio de la pagina
    }, []);

    return (
        <div>
            <div className='home-container'>
                <div className='background'>
                    <div className='contenedor'>
                        <Banner />
                    </div>
                </div>
            </div>
            <About />
            <hr className='hr-divisor' />
            <GalleryContainer />
            <Entrada />
            <Mapa/>
        </div>
    )
}

export default Home;