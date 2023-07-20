import React from 'react';
import '../styles/Contactanos.scss';
import { GeoAltFill, EnvelopeFill, TelephoneFill, Instagram, Facebook } from 'react-bootstrap-icons';

const Contactanos = () => {
    return (
        <div className='container-container'>
            <div className='contactanos-container'>
                <div className='social-container'>
                    <div className='square'>
                        <h1 className='contactanos-text'>Beat Club Mendoza</h1>
                        <div>
                            <p className='contactanos-link' id='location-link'>Av.Perú 1773, M5500 Mendoza, Argentina</p>
                            <p className='contactanos-link' id='mail-link'>beatclubmendoza@gmail.com</p>
                            <p className='contactanos-link' id='phone-link'>(261) 341-7030</p>
                            <a href='https://www.instagram.com/beatclubmendoza/' className='contactanos-link' id='instagram-link'>@beatclubmendoza</a>
                            <a href='https://www.facebook.com/beatclubpianobar/' className='contactanos-link' id='facebook-link'>@beatclubmendoza</a>
                        </div>
                        <GeoAltFill className='icon-logo' />
                        <EnvelopeFill className='icon-logo' />
                        <TelephoneFill className='icon-logo' />
                        <Instagram className='icon-logo' id='instagram-logo' />
                        <Facebook className='icon-logo' id='facebook-logo' />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contactanos;