import React, { useEffect, lazy, Suspense } from 'react';
import Formulario from '../components/Formulario';
import '../styles/Contacto.scss';
import { ScaleLoader } from 'react-spinners'

const Contactanos = lazy(()=> import ('../components/Contactanos'));
const Mapa = lazy(()=> import ('../components/Mapa'));
const Form = lazy(()=> import('react-router-dom'))


const Contacto = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Hacer scroll al principio de la página
    }, []);

    return(
        <div>
            <Suspense fallback={<div className="loading-message general">
                <ScaleLoader
                    color="#A80038"
                    height={70}
                    margin={4}
                    width={8}
                />
            </div>}>
            <div className='contenedor-contacto' data-aos="fade-down" data-aos-duration="500">
                <Contactanos/>
                <Formulario/>
            </div>
            <Mapa/>
            </Suspense>
        </div>
    );
};

export default Contacto;