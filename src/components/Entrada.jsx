import React from 'react';
import '../styles/Entrada.scss';
import publico from '../assets/entradasweb.webp';

const Entrada = () => {
    return (
        <div className='container__container' data-aos="fade-down" data-aos-duration="500">
            <div className='entradaweb__container'>
                <div className='entradaweb__container-izq'>
                    <h2 className='entrada-text' id='entrada-title'>Compra tu Entrada ahora mismo!</h2>
                    <h2 className='entrada-text' id='entrada-subtitle'>Vení a vivir una experiencia única en Beat Club.</h2>
                    <a href='https://www.entradaweb.com.ar/index.php?r=site%2Flistado-filtrado&recinto=RCTO-24e15b33' target='_blank' className='btn'>COMPRA TU ENTRADA</a>
                </div>
                <img src={publico} alt="Foto de espectáculo" className='entradaweb-img' loading="lazy" />
            </div>
        </div>
    )
}

export default Entrada;