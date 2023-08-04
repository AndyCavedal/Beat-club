import React, { useState, useEffect } from "react";
import '../styles/Eventos.scss';
import EventosFuturos  from '/src/components/EventosFuturos'
import EventosPasados  from '/src/components/EventosPasados'

const Eventos = () =>{
    
    return (
        <div className='contenedor-eventos'>
            <EventosFuturos />
            <EventosPasados />
        </div>
    )
}

export default Eventos;