import React from 'react';
import '../styles/Footer.scss';
import { Instagram, Facebook, EnvelopeFill } from 'react-bootstrap-icons';


const Footer = () => {
    return (

        <div className='footer'>
            <div className='footer-above footer-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <p>Abrimos a las 21:30hs Viernes y Sábados</p>
                    </div>
                </div>
                <hr />
                <div className='footer-links-redes'>
                    <a href="mailto:beatclubmendoza@gmail.com" target="_blank" rel="noreferrer" aria-label='red social facebook'>
                        <EnvelopeFill className='redes-logo'/>
                    </a>
                    <a href="https://www.instagram.com/beatclubmendoza/" target="_blank" rel="noreferrer" aria-label='red social instragram'>
                        <Instagram className='redes-logo' />
                    </a>
                    <a href="https://www.facebook.com/beatclubpianobar/" target="_blank" rel="noreferrer" aria-label='red social facebook'>
                        <Facebook className='redes-logo'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;