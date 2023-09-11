import React from 'react';
import '../styles/MenuPagos.scss';
import visa from '../assets/menu/visa.webp';
import american from '../assets/menu/AmericanExpress.webp';
import master from '../assets/menu/mastercard.png';
import mp from '../assets/menu/mercado-pago.png';
import naranja from '../assets/menu/tarjeta-naranja.png';

const MenuPagos = () => {
    return (
        <div className='pagos__container'>
            <h2 className='pagos-title'>Medios de Pago</h2>
            <div className='image__container'>
                <img src={visa} alt="Tipo de tarjeta Visa" loading="lazy"/>
                <img src={master} alt="Tipo de tarjeta Mastercard" loading="lazy"/>
                <img src={mp} alt="Tipo de tarjeta Mercado Pago" loading="lazy" />
                <img src={naranja} alt="Tipo de Tarjeta Naranja" loading="lazy"/>
                <img src={american} alt="Tipo de tarjeta American Express" loading="lazy"/>
            </div>
        </div>
    )
};

export default MenuPagos;