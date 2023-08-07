import React from 'react';
import '../styles/Footer.scss';
import { Instagram, Facebook } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <div className='footer'>
            <div className='footer-above footer-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <h4>Nosotros</h4>
                        <Link to='/'>
                            Acerca de
                        </Link>
                        <Link to='/eventos'>
                            Eventos
                        </Link>
                        <Link to='/menu'>
                            Menu
                        </Link>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Contacto</h4>
                        <span>Reservas: (261) 341-7030</span>
                        <span>Correo: beatclubmendoza@gmail.com</span>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Redes</h4>
                        <div className='footer-links-redes'>
                            <Instagram className='redes-logo'/>
                            <Facebook  className='redes-logo'/>
                        </div>
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