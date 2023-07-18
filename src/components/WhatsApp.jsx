import React from 'react';
import '../styles/WhatsApp.scss';
import { Whatsapp } from 'react-bootstrap-icons';


const WhatsApp = () =>{
    return(
        <div>
            <a class='btn-wsp' href="#" target="_blank" rel="noreferrer">
                <Whatsapp />
            </a>
        </div>
    )
}

export default WhatsApp;



