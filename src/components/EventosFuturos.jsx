import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/EventosPasados.scss';
import { ScaleLoader } from 'react-spinners'

const EventosFuturos = () => {

    const [apiEventosF, setApiEventosF] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getEventosF();
    }, []);

    const getEventosF = async () => {
        try {
            const resp = await axios.get("https://server-api-beat-club.vercel.app/eventos/futuros");
            const currentDate = new Date().toISOString();
            const eventosActualizados = resp.data.map((evento) => {
                const fechaEvento = new Date(evento.fecha_evento).toISOString().split('T')[0];
                // console.log("fecha actual:", currentDate)
                // console.log("fechaEvento:", fechaEvento)
                // console.log("fecha del evento de la base de datos:", evento.fecha_evento)
                // Si la fecha del evento es menor o igual a la fecha actual, actualizar es_proximo a 0


                if (fechaEvento < currentDate) {
                    return {
                        ...evento,
                        es_proximo: 0,
                    };
                }
                return evento;

            });
            // Realizar el PATCH para actualizar los eventos cuya fecha ya paso
            axios
                .patch("https://server-api-beat-club.vercel.app/Eventos", eventosActualizados)
                .then(() => {
                    // Actualizar el estado local con los eventos actualizados
                    setApiEventosF(eventosActualizados);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error al actualizar eventos pasados", error);
                });
        } catch (error) {
            setLoading(false);
            console.error("Error al obtener eventos futuros", error);
        }
    };


    const formatDate = (dateString) => {
        // Convertir la fecha UTC a un objeto Date
        const fechaUTC = new Date(dateString);

        // Obtener la fecha local en formato de cadena (por ejemplo, 'dd/mm/yyyy')
        const fechaLocalString = fechaUTC.toLocaleDateString();

        return fechaLocalString;
    };

    if (loading) {
        return (
            <div className="loading-message">
                <ScaleLoader
                    color="#A80038"
                    height={70}
                    margin={4}
                    width={8}
                />
            </div>
        );
    }


    return apiEventosF.length === 0 ? (
        <div className="no-events__container">
            <h3>No Hay Eventos Próximos</h3>
        </div>
    ) : (
        <div className="eventos-container__container">
            <h2 id="evento-futuro-title">Proximos Eventos!</h2>
            <div className="eventos__container">
                {Array.isArray(apiEventosF) && apiEventosF.map((evento, index) => (
                    <div className="eventos-container__container" key={index}>
                        <div className="folleto__container">
                            <h3>{evento.titulo}</h3>
                            <img src={evento.imagen_url} alt={evento.titulo} loading="lazy" />
                            <span className="eventos-fecha">{formatDate(evento.fecha_evento)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventosFuturos;