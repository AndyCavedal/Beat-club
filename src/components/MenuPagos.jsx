import React from 'react';
import '../styles/MenuPagos.scss';
import visa from '../assets/menu/Visa.jpg';
import american from '../assets/menu/AmericanExpress.jpg';
import master from '../assets/menu/mastercard.png';
import mp from '../assets/menu/mercado-pago.png';
import naranja from '../assets/menu/tarjeta-naranja.png';

const MenuPagos = () => {
    return (
        <div className='pagos__container'>
            <h2 className='pagos-title'>Medios de Pago</h2>
            <div className='image__container'>
                <img src={visa} alt="visa" />
                <img src={master} alt="mastercard" />
                <img src={mp} alt="mercado pago" />
                <img src={naranja} alt="tarjeta naranja" />
                <img src={american} alt="american express" />
            </div>
        </div>
    )
};

export default MenuPagos;