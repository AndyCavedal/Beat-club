import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/EventosPasados.scss';

const EventosFuturos = () => {

    const [apiEventosF, setApiEventosF] = useState([])


    useEffect(() => {
        getEventosF()
        const currentDate = new Date().toISOString();
        const eventosActualizados = apiEventosF.map((evento) => {
            // Si la fecha del evento es menor o igual a la fecha actual, actualizar es_proximo a 0
            if (evento.fecha_evento < currentDate) {
                return {
                    ...evento,
                    es_proximo: 0,
                };
            }
            return evento;
        });
        // Realizar el PATCH para actualizar los eventos cuya fecha ya pasó
        axios
            .patch("https://server-api-beat-club.vercel.app/Eventos", eventosActualizados)
            .then((resp) => {
                getEventosF();
            })
            .catch((error) => {
                console.error("Error al actualizar eventos pasados", error);
            });
    }, [apiEventosF])

    function getEventosF() {
        axios.get("https://server-api-beat-club.vercel.app/eventos/futuros").then((resp) => {
            setApiEventosF(resp.data)
        })
    }

    const formatDate = (dateString) => {
        return dateString.substring(0, 10);
    };

    return (
        <div className="">
            <h2>Proximos Eventos!</h2>
            {apiEventosF.map((evento, index) => (
                <div className="" key={index}>
                    <h4>{evento.titulo}</h4>
                    <img src={evento.img_url} alt={evento.titulo} />
                    <span>{formatDate(evento.fecha_evento)}</span>
                </div>
            ))}
        </div>
    )
}

export default EventosFuturos;