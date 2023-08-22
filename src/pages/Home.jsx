import '../styles/Home.scss';
import Banner from '../components/Banner'
import About from '../components/About'
import GalleryContainer from '../containers/GalleryContainer';
import Entrada from '../components/Entrada';
import Mapa from '../components/Mapa';
import React, { useEffect, useState } from 'react';
import EventosFuturos from '../components/EventosFuturos';

const Home = () => {
    const [scrollPosY, setScrollPosY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosY(window.scrollY * 0.2);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='home-container'>
                <div className='background' style={{ transform: `translateY(-${scrollPosY}px)` }}>
                    <div className='contenedor'>
                        <Banner />
                    </div>
                </div>
            </div>
            <About />
            <hr className='hr-divisor' />
            <EventosFuturos/>
            <GalleryContainer />
            <Entrada />
            <Mapa/>
        </div>
    )
}

export default Home;