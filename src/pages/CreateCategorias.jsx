import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backarrow from '../assets/back-arrow2.svg';
import database from '../assets/database-add.svg';


const CreateCategorias = ()=>{
    const [nombreC, setNombreC]=useState("")
    const [imgCategoria, setImgCategoria]=("")
    const [dtCategoria, setDtCategorias] = useState([])


    useEffect(()=>{
        getCategorias()
    },[])

    async function getCategorias() {
        try {
            const resp = await axios.get("https://server-api-beat-club.vercel.app/categorias");
            setDtCategorias(resp.data);
        } catch (error) {
            throw new Error("Error al obtener categorias: " + error.message);
        }
    }


    const postData = () => {
        const existingData = dtCategoria.find((item) => item.nombre === nombreC)
        if (existingData) {
            alert('Este producto ya esta cargado')
        }
        else {
            if (nombreC === "" || imgCategoria === "") {
                alert('campos vacio')
            }
            else {
                axios.post('https://server-api-beat-club.vercel.app/categorias', {
                    nombre: nombreC,
                    imagen_url: imgCategoria
                })
            }
        }
    };

    return(
        <div className="supercontainer">
            <div className="producto-form__container">
                <form>
                    <label>Nombre</label> <br />
                    <input
                        placeholder="Nombre"
                        required
                        onChange={(e) => setNombreC(e.target.value)}
                    /> <br />

                    <label>Imagen con url</label> <br />
                    <input
                        placeholder="poner imagen con url"
                        onChange={(e) => setImgCategoria(e.target.value)}
                    /> <br />

                    <ul>
                        <Link to='/readcategorias'>
                            <button id="crear-categoria__link" onClick={postData} type="submit">
                                Crear Categoria
                                <img className="links-icons" src={database} alt="database add icon" />
                            </button>
                        </Link>
                        <Link to="/readcategorias">
                            <button id="cerrar__link">
                                Volver
                                <img className="links-icons" src={backarrow} alt="back arrow icon" />
                            </button>
                        </Link>
                    </ul>
                </form>
            </div>
        </div>
    )
}


export default CreateCategorias