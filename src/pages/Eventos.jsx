import React from "react";
import EventosFuturos  from '/src/components/EventosFuturos'
import EventosPasados  from '/src/components/EventosPasados'
import { app, analytics } from "../firebase";

const Eventos = () =>{
    return (
        <div className='contenedor-eventos'>
            <EventosFuturos />
            <EventosPasados />
        </div>
    )
}

export default Eventos;