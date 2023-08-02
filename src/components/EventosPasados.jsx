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
        return dateString.substring(0, 10);
    };

    return (
        <div className="eventos-container__container">
            <h2>Lo que te perdiste salamin</h2>
            <div className="eventos__container">
                {apiEventosP.map((evento, index) => (
                    <div className="folleto__container" key={index}>
                        <h4>{evento.titulo}</h4>
                        <img src={evento.img_url} alt={evento.titulo} />
                        <span className="eventos-fecha">{formatDate(evento.fecha_evento)}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default EventosPasados;