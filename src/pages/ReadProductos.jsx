import React, { useState, useEffect } from "react";
import '../styles/ReadMenu.scss';
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowReturnLeft, Pencil, Trash3 } from 'react-bootstrap-icons';
import database from '../assets/database-add.svg';

const ReadProductos = () => {
    const [apiProductos, setApiProductos] = useState([])

    useEffect(() => {
        getProductos()
    }, [])

    function getProductos() {
        axios.get("https://server-api-beat-club.vercel.app/productos").then((resp) => {
            console.log(resp.data)
            setApiProductos(resp.data)
        });
    }

    function onDelete(id) {
        axios.delete(`https://server-api-beat-club.vercel.app/productos/${id}`).then(() => {
            getProductos();
        })
    }

    function setData(data) {
        let { producto_id, nombre, precio, descripcion, categoria_id, imagen_url } = data;
        localStorage.setItem("ID", producto_id);
        localStorage.setItem("Nombre", nombre);
        localStorage.setItem("Precio", precio);
        localStorage.setItem("Descripcion", descripcion);
        localStorage.setItem("Categoria_id", categoria_id);
        localStorage.setItem("Imagen_url", imagen_url)
    }

    return (
        <div className="read-container__container">
            <div className="links">
                <div className="new__link">
                    <Link className="create__link" to="/createproducto">
                        <button>Nuevo producto</button>
                        <img src={database} className="database-logo" alt="Icono de DataBase" />
                    </Link>
                </div>
                <div className="new__link">
                    <Link className="volver__link" to="/root">
                        <button>Volver</button>
                        <ArrowReturnLeft className="database-logo" />
                    </Link>
                </div>
            </div>
            <table className="datatable">
                <thead>
                    <tr>
                        <th className="table-title">Nombre</th>
                        <th className="table-title">Precio</th>
                        <th className="table-title">Descripcion</th>
                        <th className="table-title">Categoria</th>
                        <th className="table-title">Editar</th>
                        <th className="table-title">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {apiProductos.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.nombre}</td>
                            <td>${elem.precio}</td>
                            <td>{elem.descripcion}</td>
                            <td>{elem.categoria_nombre}</td>
                            <td>
                                <Link to="/updateproducto">
                                    <button onClick={() => setData(elem)}>
                                        <Pencil />
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => onDelete(elem.producto_id)}>
                                    <Trash3 />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default ReadProductos;