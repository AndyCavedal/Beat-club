import React from 'react';
import '../styles/Footer.scss';

const Footer = () =>{
    return(
        
        <div className='footer'>
            <div className='footer-above footer-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <h4>Nosotros</h4>
                        <a href="#">
                            <p>Acerca De</p>
                        </a>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Contacto</h4>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Redes</h4>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Horarios</h4>
                    </div>
                </div>
                <hr />
                <div className='footer-below'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Estudios Chango.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;