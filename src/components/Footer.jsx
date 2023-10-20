import React from 'react';
import '../styles/Footer.scss';
import { Instagram, Facebook, EnvelopeFill } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';


const Footer = () => {

    const location = useLocation();

    const routesWithFooter = ['/readproductos', '/readeventos', '/root', '/createproducto', '/updateproducto', '/createevento', '/readcategorias', '/createcategorias', '/updatecategorias', '/login'];

    const shouldShowWhatsApp = !routesWithFooter.includes(location.pathname);

    if (!shouldShowWhatsApp) {
        return null;
    }

    return (

        <div className='footer'>
            <div className='footer-above footer-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <p>Viernes y Sábados a partir de las 21:30hs</p>
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