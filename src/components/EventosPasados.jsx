import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/EventosPasados.scss';

const EventosPasados = () => {
    const [apiEventosP, setApiEventosP] = useState([])


    useEffect(() => {
        getEventosP()
    }, [])

    function getEventosP() {
        axios.get("https://server-api-beat-club.vercel.app/eventos/pasados").then((resp) => {
            setApiEventosP(resp.data)
        })
    }

    const formatDate = (dateString) => {
        // Convertir la fecha UTC a un objeto Date
        const fechaUTC = new Date(dateString);

        // Obtener la fecha local en formato de cadena (por ejemplo, 'dd/mm/yyyy')
        const fechaLocalString = fechaUTC.toLocaleDateString();

        return fechaLocalString;
    };

    return (
        <div className="eventos-container__container">
            <h2>Lo que te perdiste salamin</h2>
            <div className="eventos__container">
                {apiEventosP.map((evento, index) => (
                    <div className="folleto-container__container">
                        <div className="folleto__container" key={index}>
                            <h4>{evento.titulo}</h4>
                            <img src={evento.imagen_url} alt={evento.titulo} />
                            <span className="eventos-fecha">{formatDate(evento.fecha_evento)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default EventosPasados;