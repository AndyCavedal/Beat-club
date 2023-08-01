import React, { useState, useEffect } from "react";
import axios from "axios";

const EventosPasados = ()=>{
    const [apiEventosP, setApiEventosP] = useState([])


    useEffect(()=>{
        getEventosP()
    },[])

    function getEventosP(){
        axios.get("https://server-api-beat-club.vercel.app/eventos/pasados").then((resp)=>{
            setApiEventosP(resp.data)
        })
    }

    const formatDate = (dateString) => {
        return dateString.substring(0, 10);
    };

    return (
        <div>
            {apiEventosP.map((evento, index)=>(
                <div key={index}>
                    <h4>{evento.titulo}</h4>
                    <img src={evento.img_url} alt={evento.titulo} />
                    <span>{formatDate(evento.fecha_evento)}</span>
                </div>
            ))}
        </div>
    )
}


export default EventosPasados;