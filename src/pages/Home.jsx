import React, { useEffect, useState, lazy, Suspense } from 'react';
import { ScaleLoader } from 'react-spinners'
import '../styles/Home.scss';

const EventosFuturos = lazy(() => import('../components/EventosFuturos'));
const About = lazy(() => import('../components/About'))
const GalleryContainer = lazy(() => import('../containers/GalleryContainer'))
const Entrada = lazy(() => import('../components/Entrada'))
const Mapa = lazy(() => import('../components/Mapa'))
const Bienvenida = lazy(() => import('../components/Bienvenida'))

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

    const estilosPagina1 = {
    marginTop: '10px',
    mediaQuery: `
      @media only screen and (max-width: 850px) {
        #evento-futuro-title {
          margin-top: 100px;
          border-bottom: 3px solid var(--dark-red);
        }
      }
    `,
  };

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
                <EventosFuturos estilos={estilosPagina1}/>
                <GalleryContainer />
                <Entrada />
                <Mapa />
            </Suspense>
        </div>
    )
}

export default Home;