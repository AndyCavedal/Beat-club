import React, { useEffect } from 'react';
import Contactanos from '../components/Contactanos';
import Mapa from '../components/Mapa';
import Formulario from '../components/Formulario';
import { Form } from 'react-router-dom';
import '../styles/Contacto.scss';


const Contacto = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Hacer scroll al principio de la página
    }, []);

    return(
        <div>
            <div className='contenedor-contacto' data-aos="fade-down" data-aos-duration="500">
                <Contactanos/>
                <Formulario/>
            </div>
            <Mapa/>
        </div>
    );
};

export default Contacto;