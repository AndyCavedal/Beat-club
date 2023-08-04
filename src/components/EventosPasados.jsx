import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/EventosPasados.scss';

const EventosPasados = () => {
    const [apiEventosP, setApiEventosP] = useState([])


    useEffect(() => {
        getEventosP()
    }, [])

    async function getEventosP() {
        try {
            const response = await axios.get("https://server-api-beat-club.vercel.app/eventos/pasados");
            setApiEventosP(response.data);
        } catch (error) {
            console.error("Error al obtener eventos pasados:", error);
        }
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
            <h2>Ultimos Eventos</h2>
            <div className="eventos__container">
                {apiEventosP.map((evento, index) => (
                    <div className="eventos-container__container" key={index}>
                        <div className="folleto__container" >
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