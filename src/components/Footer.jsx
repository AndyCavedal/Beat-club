import React from 'react';
import '../styles/Footer.scss';
import { Instagram, Facebook } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {
    return (

        <div className='footer'>
            <div className='footer-above footer-padding'>
                <div className='footer-links'>
                    <div className='footer-links-div'>
                        <h4>Nosotros</h4>
                        <ScrollLink
                            to="about-section"
                            smooth={true}
                            duration={500}
                            className='div-links'>
                            Acerca de
                        </ScrollLink>
                        <Link to='/eventos' className='div-links'>
                            Eventos
                        </Link>
                        <Link to='/menu' className='div-links'>
                            Menu
                        </Link>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Contacto</h4>
                        <p>Reservas: (261) 341-7030</p>
                        <p>Correo: beatclubmendoza@gmail.com</p>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Redes</h4>
                        <div className='footer-links-redes'>
                            <a href="https://www.instagram.com/beatclubmendoza/">
                                <Instagram className='redes-logo' />
                            </a>
                            <a href="https://www.facebook.com/beatclubpianobar/">
                                <Facebook className='redes-logo' />
                            </a>
                        </div>
                    </div>
                    <div className='footer-links-div'>
                        <h4>Horarios</h4>
                        <p>Abrimos a las 21:30hs</p>
                        <p>Viernes y Sábados</p>
                    </div>
                </div>
                <hr />
                <div className='footer-below'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Autors: <a className='copy-autors' href="https://estebanbarrionuevo.vercel.app/">Esteban,</a> <a className='copy-autors' href="https://andycavedal.vercel.app/">Andy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;