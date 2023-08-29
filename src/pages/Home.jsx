import '../styles/Home.scss';
import Banner from '../components/Banner'
///import About from '../components/About'
//import GalleryContainer from '../containers/GalleryContainer';
//import Entrada from '../components/Entrada';
//import Mapa from '../components/Mapa';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import EventosFuturos from '../components/EventosFuturos';
import { useSpring, animated } from 'react-spring';

const About = lazy(() => import('../components/About'))
const Entrada = lazy(() => import('../components/Entrada'))
const GalleryContainer = lazy(() => import('../containers/GalleryContainer'))
const Mapa = lazy(() => import('../components/Mapa'))
import { ScaleLoader } from 'react-spinners'

const Home = () => {
    const [scrollPosY, setScrollPosY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backgroundSpring = useSpring({
        transform: `translateY(-${scrollPosY * 0.4}px)`,
    });

    const bannerSpring = useSpring({
        transform: `translateY(${scrollPosY * 0.1}px)`,
    });



    return (
        <div>
            <div className='home-container'>
                <animated.div className='background' style={backgroundSpring}>
                    <div className='contenedor'>
                        <animated.div className='banner' style={bannerSpring}>
                            <Banner />
                        </animated.div>
                    </div>
                </animated.div>
            </div>
            <Suspense fallback={<div className="loading-message">
                <ScaleLoader
                    color="#A80038"
                    height={70}
                    margin={4}
                    width={8}
                />
            </div>}>
                <About />
                <hr className='hr-divisor' />
                <EventosFuturos />
                <GalleryContainer />
                <Entrada />
                <Mapa />
            </Suspense>
        </div>
    )
}

export default Home;