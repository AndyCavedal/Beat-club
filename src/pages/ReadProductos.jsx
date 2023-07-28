import React, { useState, useEffect } from "react";
import '../styles/ReadProductos.scss';
import axios from "axios";
import { Link } from "react-router-dom";

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

    function onDelete(id){
        axios.delete(`https://server-api-beat-club.vercel.app/productos/${id}`).then(()=>{
            getProductos();
        })
    }

    return (
        <div>
            <div>
                <div>
                    <Link to='/createproducto'>
                        <button>Nuevo producto</button>
                    </Link>
                    <Link to='/root'>
                        <button>Volver</button>
                    </Link>
                </div>
            </div>
            <table className="datatable">
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Descripcion</td>
                        <td>Categoria</td>
                    </tr>
                </thead>
                <tbody>
                    {apiProductos.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.nombre}</td>
                            <td>{elem.precio}</td>
                            <td>{elem.descripcion}</td>
                            <td>{elem.categoria_nombre}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button onClick={()=>onDelete(elem.producto_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default ReadProductos