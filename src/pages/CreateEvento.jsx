import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backarrow from '../assets/back-arrow2.svg';
import database from '../assets/database-add.svg';
import '../styles/CreateEvento.scss';

const CreateEvento = () => {
    const [titulo, setTitulo] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [fechaEvento, setFechaEvento] = useState("");


    const postData = () => {
        if (titulo === "" || fechaEvento === "" || imgUrl === "") {
            alert('Campos vacios');
        } else {
            const fechaEventoUTC = new Date(fechaEvento).toISOString();
            axios.post('https://server-api-beat-club.vercel.app/eventos', {
                titulo,
                imagen_url: imgUrl,
                fecha_evento: fechaEventoUTC,
                es_proximo: true,
            }).then((response) => {
                // Aqui puedes manejar la respuesta del servidor si es necesario
                console.log("Evento creado:", response.data);
                // Puedes redireccionar a otra pagina despues de crear el evento si lo deseas
            }).catch((error) => {
                console.error("Error al crear evento:", error);
            });
        }
    };

    return (
        <div className="supercontainer">
            <div className="producto-form__container">
                <form>
                    <label>Título</label> <br />
                    <input
                        placeholder="Título"
                        required
                        onChange={(e) => setTitulo(e.target.value)}
                    /> <br />

                    <label>Imagen con URL</label> <br />
                    <input
                        placeholder="Poner imagen con URL"
                        required
                        onChange={(e) => setImgUrl(e.target.value)}
                    /> <br />

                    <label>Fecha del evento</label> <br />
                    <input
                        type="datetime-local"
                        required
                        onChange={(e) => setFechaEvento(e.target.value)}
                    /> <br />

                    {/* Agregar más campos para otros datos del evento si es necesario */}

                    <div className="buttons-container">
                        <Link to='/readeventos'>
                            <button id="crear-categoria__link" onClick={postData} type="submit">
                                Crear Evento
                                <img className="links-icons" src={database} alt="database add icon" />
                            </button>
                        </Link>
                        <Link to="/readeventos">
                            <button id="cerrar__link">
                                Volver
                                <img className="links-icons" src={backarrow} alt="back arrow icon" />
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default CreateEvento;