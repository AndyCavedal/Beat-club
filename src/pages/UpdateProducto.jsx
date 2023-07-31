import React, { useState, useEffect } from "react";
import '../styles/UpdateProducto.scss';
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateProducto = () => {
    const [id, setID] = useState(null)
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [categoria_id, setCategoria_id] = useState(0)
    const [imagen, setImagen] = useState("")

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setNombre(localStorage.getItem("Nombre"))
        setPrecio(localStorage.getItem("Precio"))
        
        setCategoria_id(localStorage.getItem("Categoria_id"))
        

        // Verificar si la descripcion ya tiene un valor en el formulario
        const storedDescripcion = localStorage.getItem("Descripcion");
        if (storedDescripcion !== null && storedDescripcion !== "null") {
            setDescripcion(storedDescripcion);
        }

        // Verificar si la imagen ya tiene un valor en el formulario
        const storedImagen = localStorage.getItem("Imagen_url");
        if (storedImagen !== null && storedImagen !== "null") {
            setImagen(storedImagen);
        }
    }, [])

    function updateApiData() {
        axios.put(`https://server-api-beat-club.vercel.app/productos/${id}`, {
            nombre,
            precio,
            descripcion,
            categoria_id,
            imagen_url: imagen
        })
    }


    return (
        <div>
            <form >
                <h1>{categoria_id}</h1>
                <label>Nombre</label> <br />
                <input
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                /><br />

                <label>Precio</label> <br />
                <input
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                /> <br />

                <label>Descripcion</label> <br />
                <input
                    placeholder="Descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                /> <br />

                <label>Imagen Url</label> <br />
                <input
                    placeholder="Imagen_url"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                /> <br />
                <br />
                <Link to='/readproductos'>
                    <button onClick={() => updateApiData()} type="submit">ACEPTAR</button>
                </Link>
                <Link to='/readproductos'>
                    <button>CANCELAR</button>
                </Link>
            </form>
        </div>
    )
}


export default UpdateProducto;