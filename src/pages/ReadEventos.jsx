import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowReturnLeft, Pencil, Trash3 } from 'react-bootstrap-icons';
import database from '../assets/database-add.svg';
import '../styles/ReadMenu.scss';


const ReadEventos = () => {
  const [apiEventosF, setApiEventosF] = useState([])
  const [apiEventosP, setApiEventosP] = useState([])


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      await getEventosP();
      await getEventosF();
    } catch (error) {
      console.error("Error al obtener eventos:", error);
    }
  }

  async function getEventosP() {
    try {
      const resp = await axios.get("https://server-api-beat-club.vercel.app/eventos/pasados");
      setApiEventosP(resp.data);
    } catch (error) {
      throw new Error("Error al obtener eventos pasados: " + error.message);
    }
  }

  async function getEventosF() {
    try {
      const resp = await axios.get("https://server-api-beat-club.vercel.app/eventos/futuros");
      setApiEventosF(resp.data);
    } catch (error) {
      throw new Error("Error al obtener eventos futuros: " + error.message);
    }
  }

  function onDelete(id) {
    axios.delete(`https://server-api-beat-club.vercel.app/eventos/${id}`).then(() => {
      getEventosP()
      getEventosF()
    })
  }

  function setData(data) {
    let { evento_id, img_url, titulo, fecha_evento } = data
    localStorage.setItem("eventoID", evento_id);
    localStorage.setItem("Imagen", img_url);
    localStorage.setItem("Titulo", titulo);
    localStorage.setItem("fecha_evento", fecha_evento);
  }

  const formatDate = (dateString) => {
    // Convertir la fecha UTC a un objeto Date
    const fechaUTC = new Date(dateString);

    // Obtener la fecha local en formato de cadena (por ejemplo, 'dd/mm/yyyy')
    const fechaLocalString = fechaUTC.toLocaleDateString();

    return fechaLocalString;
  };

  return (
    <div className='read-container__container'>
      <div className="links linkeventos">
        <div className="new__link">
          <Link className="create__link" to='/createevento' >
            <button>Nuevo evento</button>
            <img src={database} className="database-logo" alt="database add icon" />
          </Link>
        </div>
        <div className="new__link">
          <Link className="volver__link" to='/root'>
            <button>Volver</button>
            <ArrowReturnLeft className="database-logo" />
          </Link>
        </div>
      </div>
      <div className="readeventos__container">
        <h2>Eventos Futuros</h2>
        <table className="datatable">
          <thead>
            <tr>
              <th className="table-title">Imagen</th>
              <th className="table-title">Titulo</th>
              <th className="table-title">Fecha</th>
              <th className="table-title">Del</th>
            </tr>
          </thead>
          <tbody>
            {apiEventosF.map((elem) => (
              <tr key={elem.evento_id}>
                <td className="table-header"><img className="readevent-foto" src={elem.imagen_url} alt={elem.titulo} /></td>
                <td>{elem.titulo}</td>
                <td>{formatDate(elem.fecha_evento)}</td>
                <td className="crud-evento">
                  <button onClick={() => onDelete(elem.evento_id)}>
                    <Trash3 className="button-img" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="readeventos__container">
        <h2>Eventos Pasados</h2>
        <table className="datatable">
          <thead>
            <tr>
              <th className="table-title">Imagen</th>
              <th className="table-title">Titulo</th>
              <th className="table-title">Fecha</th>
              <th className="table-title">Del</th>
            </tr>
          </thead>
          <tbody>
            {apiEventosP.map((elem) => (
              <tr key={elem.evento_id}>
                <td className="table-header"><img className="readevent-foto" src={elem.imagen_url} alt={elem.titulo} /></td>
                <td>{elem.titulo}</td>
                <td>{formatDate(elem.fecha_evento)}</td>
                <td className="crud-evento">
                  <button onClick={() => onDelete(elem.evento_id)}>
                    <Trash3 className="button-img" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default ReadEventos