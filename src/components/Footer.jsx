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
                        <h3>Nosotros</h3>
                        <Link
                            to="/contacto"
                            className='div-links'
                            >
                            Contactanos
                        </Link>
                        <Link to='/eventos' className='div-links'>
                            Eventos
                        </Link>
                        <Link to='/menu' className='div-links'>
                            Menu
                        </Link>
                    </div>
                    <div className='footer-links-div'>
                        <h3>Contacto</h3>
                        <p>Reservas: (261) 341-7030</p>
                        <p>Correo: beatclubmendoza@gmail.com</p>
                    </div>
                    <div className='footer-links-div'>
                        <h3>Redes</h3>
                        <div className='footer-links-redes'>
                            <a href="https://www.instagram.com/beatclubmendoza/" target="_blank" rel="noreferrer" aria-label='red social instragram'>
                                <Instagram className='redes-logo' />
                            </a>
                            <a href="https://www.facebook.com/beatclubpianobar/" target="_blank" rel="noreferrer" aria-label='red social facebook'>
                                <Facebook className='redes-logo' />
                            </a>
                        </div>
                    </div>
                    <div className='footer-links-div'>
                        <h3>Horarios</h3>
                        <p>Abrimos a las 21:30hs</p>
                        <p>Viernes y Sábados</p>
                    </div>
                </div>
                <hr />
                <div className='footer-below'>
                    <div className='footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Autors: <a className='copy-autors' href="https://estebanbarrionuevo.vercel.app/" target="_blank" rel="noreferrer">Esteban,</a> <a className='copy-autors' href="https://andycavedal.vercel.app/" target="_blank" rel="noreferrer">Andy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;