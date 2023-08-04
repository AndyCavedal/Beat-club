import React from 'react';
import '../styles/Footer.scss';
import { Instagram, Facebook, EnvelopeAt, Github } from 'react-bootstrap-icons';

const Footer = () =>{
    return(
        
        <div className='footer'>
            <div className='footer__left'>
                <a href=""><Github/>@Github </a>
            </div>
            <div className='footer__right'>
                <Instagram className='footer-logo'/>
                <Facebook className='footer-logo'/>
                <EnvelopeAt className='footer-logo'/>
            </div>
        </div>
    )
}

export default Footer;