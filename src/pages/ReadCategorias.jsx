import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowReturnLeft, Pencil, Trash3 } from 'react-bootstrap-icons';
import database from '../assets/database-add.svg';



const ReadCategorias = ()=>{
    const [apiCategorias, setApiCategorias] = useState([])


    useEffect(()=>{
        getCategorias()
    },[])

    async function getCategorias() {
        try {
            const resp = await axios.get("https://server-api-beat-club.vercel.app/categorias");
            setApiCategorias(resp.data);
        } catch (error) {
            throw new Error("Error al obtener categorias: " + error.message);
        }
    }


    function onDelete(id) {
        axios.delete(`https://server-api-beat-club.vercel.app/categorias/${id}`).then(() => {
            getCategorias();
        })
    }


    function setData(data) {
        let { categoria_id, nombre, imagen_url } = data;
        localStorage.setItem("categoria_ID", categoria_id);
        localStorage.setItem("NombreCategoria", nombre);
        localStorage.setItem("ImagenCategoria", imagen_url);
    }

    return(
        <div className="productos-container__container">
            <div className="links">
                <div className="new-product__link">
                    <Link className="create-product__link" to='/createcategorias' >
                        <button>Nueva Categoria</button>
                        <img src={database} className="database-logo" alt="database add icon" />
                    </Link>
                </div>
                <div className="new-product__link">
                    <Link className="volver__link" to='/root'>
                        <button>Volver</button>
                        <ArrowReturnLeft className="database-logo" />
                    </Link>
                </div>
            </div>
            <table className="datatable">
                <thead>
                    <tr>
                        <td className="table-title">Nombre</td>
                        <td className="table-title">Imagen</td>
                    </tr>
                </thead>
                <tbody>
                    {apiCategorias.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.nombre}</td>
                            <td><img src={elem.imagen_url} alt={elem.nombre} /></td>
                            <td>
                                <Link to='/updatecategorias'>
                                    <button onClick={() => setData(elem)}>
                                        <Pencil />
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => onDelete(elem.categoria_id)}><Trash3 /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReadCategorias