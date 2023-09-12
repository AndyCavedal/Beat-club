import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ScaleLoader } from 'react-spinners'
import '../styles/Home.scss';

const Banner = lazy(() => import('../components/Banner'));
const EventosFuturos = lazy(() => import('../components/EventosFuturos'));
const About = lazy(() => import('../components/About'))
const GalleryContainer = lazy(() => import('../containers/GalleryContainer'))
const Entrada = lazy(() => import('../components/Entrada'))
const Mapa = lazy(() => import('../components/Mapa'))
const Bienvenida = lazy(() => import('../components/Bienvenida'))
import { useSpring, animated } from 'react-spring';

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
            <div>
                <Bienvenida />
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