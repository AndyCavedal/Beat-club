import React from 'react';
import '../styles/Contactanos.scss';
import { GeoAltFill, EnvelopeFill, TelephoneFill, Instagram, Facebook, BoxArrowUpRight } from 'react-bootstrap-icons';

const Contactanos = () => {
  return (

    <div className='container-container' id="contacto">
      <div className='social-container'>
        <div className='square-contacto'>
          <div className='grilla-contacto'>
            <GeoAltFill className='icon-logo grillado' />
              <p className='contactanos-link grillado' id='location-link'>Av.Perú 1773, M5500 Mendoza, Argentina</p>
            <EnvelopeFill className='icon-logo grillado' />
              <p className='contactanos-link grillado' id='mail-link'>beatclubmendoza@gmail.com</p>
            <TelephoneFill className='icon-logo grillado' />
              <p className='contactanos-link grillado' id='phone-link'>(261) 341-7030</p>
            <Instagram className='icon-logo grillado' id='instagram-logo' />
              <a href='https://www.instagram.com/beatclubmendoza/' className='contactanos-link grillado' id='instagram-link'>@beatclubmendoza<BoxArrowUpRight className='box-arrow' /></a>
            <Facebook className='icon-logo grillado' id='facebook-logo' />
              <a href='https://www.facebook.com/beatclubpianobar/' className='contactanos-link grillado' id='facebook-link'>@beatclubmendoza<BoxArrowUpRight className='box-arrow' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactanos;