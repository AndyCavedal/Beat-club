import React from 'react';
import '../styles/Entrada.scss';
import publico from '../assets/entradasweb.jpg';

const Entrada = () => {
    return (
        <div className='container__container'>
            <div className='entradaweb__container'>
                <div className='entradaweb__container-izq'>
                    <h2 className='entrada-text' id='entrada-title'>Compra tu entrada ahora mismo!</h2>
                    <h2 className='entrada-text' id='entrada-subtitle'>Compra tu entrada y veni a vivir una experiencia única en Beat Club.</h2>
                    <a href='#' target='_blank' className='btn'>COMPRA TU ENTRADA</a>
                </div>
                <img src={publico} alt="foto escenario" className='entradaweb-img' />
            </div>
        </div>
    )
}

export default Entrada;