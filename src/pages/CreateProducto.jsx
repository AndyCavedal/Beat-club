import React, { useState, useEffect } from "react";
import '../styles/CreateProducto.scss';
import { Link } from "react-router-dom";
import axios from "axios";



const CreateProducto = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState("")
    const [categorias, setCategorias] = useState([]);
    const [dtProd, setDtProd] = useState([])

    useEffect(() => {
        getProductos()
        getCategorias()
    }, []);


    function getProductos() {
        axios.get("https://server-api-beat-club.vercel.app/productos")
            .then((response) => {
                setDtProd(response.data)
                console.log(response.data)
            })
    }

    function getCategorias() {
        axios.get("https://server-api-beat-club.vercel.app/categorias").then((resp) => {
            setCategorias(resp.data)
            console.log(resp.data)
        })
    }

    const postData = () => {
        const existingData = dtProd.find((item) => item.nombre === nombre)
        if (existingData) {
            alert('Este producto ya esta cargado')
        }
        else {
            if (nombre === "") {
                alert('campos vacio')
            }
            else {
                axios.post('https://server-api-beat-club.vercel.app/productos', {
                    nombre,
                    precio,
                    descripcion,
                    categoria_id: categoria
                });
            }
        }
    };


    return (
        <div className="supercontainer">
            <div className="producto-form__container">
                <form>
                    <label>Nombre</label> <br />
                    <input
                        placeholder="Nombre"
                        required
                        onChange={(e) => setNombre(e.target.value)}
                    /> <br />

                    <label>Precio</label> <br />
                    <input
                        placeholder="Precio"
                        required
                        onChange={(e) => setPrecio(e.target.value)}
                    /> <br />

                    <label>Descripcion</label> <br />
                    <input
                        placeholder="Descripcion"
                        onChange={(e) => setDescripcion(e.target.value)}
                    /> <br />

                    <label>Categoria</label> <br />
                    <select required onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Seleccionar categoría</option>
                        {categorias.map((cat) => (
                            <option key={cat.categoria_id} value={cat.categoria_id}>
                                {cat.nombre}
                            </option>
                        ))}
                    </select>
                    <br />
                    <Link to="/readproductos">
                        <button onClick={postData} type="submit">
                            Crear Categoria
                        </button>
                    </Link>

                    <Link to="/readproductos">
                        <button type="submit">
                            Cerrar
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}


export default CreateProducto;