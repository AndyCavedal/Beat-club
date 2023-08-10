import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/EventoCarrousel.scss';
import EventosFuturos from './EventosFuturos';
import Slider from 'react-slick';
import { ScaleLoader } from 'react-spinners'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventoCarrousel = () => {
    const [apiEventosFuturos, setApiEventosFuturos] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        getEventosFuturos()
    },[])


    async function getEventosFuturos() {
        try {
            const response = await axios.get("https://server-api-beat-club.vercel.app/eventos/futuros");
            setApiEventosFuturos(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
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

    return apiEventosFuturos.length === 0 ? (
        <div className="no-events__container">
            <h3>No Hay Eventos Próximos</h3>
        </div>
    ) : (
        <div className="eventos-container__container">
            <h2 id="evento-futuro-title">Proximos Eventos!</h2>
            <div className="eventos__container">
                {apiEventosFuturos.map((evento, index) => (
                    <div className="eventos-container__container" key={index}>
                        <div className="folleto__container">
                            <h3>{evento.titulo}</h3>
                            <img src={evento.imagen_url} alt={evento.titulo} />
                            <span className="eventos-fecha">{formatDate(evento.fecha_evento)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventoCarrousel;