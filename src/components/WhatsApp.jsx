import React from 'react';
import '../styles/WhatsApp.scss';
import { Whatsapp } from 'react-bootstrap-icons';


const WhatsApp = () =>{
    return(
        <div>
            <a className='btn-wsp' href="https://api.whatsapp.com/send?phone=+542613417030&text=Hola, tengo una consulta..." aria-label="Enviar mensaje por WhatsApp" target="_blank" rel="noreferrer">
                <Whatsapp />
            </a>
        </div>
    )
}

export default WhatsApp;



