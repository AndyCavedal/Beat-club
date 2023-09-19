import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { X, Check } from "react-bootstrap-icons";
import '../styles/UpdateForm.scss';



const UpdateCategorias = () => {
  const [catId, setCatId] = useState(null)
  const [nombreCat, setNombreCat] = useState("")
  const [imagenCat, setImagenCat] = useState("")

  useEffect(() => {
    setCatId(localStorage.getItem("categoria_ID"));
    setNombreCat(localStorage.getItem("NombreCategoria"))
    setImagenCat(localStorage.getItem("ImagenCategoria"))
  }, [])


  function updateCategoria() {
    axios.put(`https://server-api-beat-club.vercel.app/categorias/${catId}`, {
      nombre: nombreCat,
      imagen_url: imagenCat
    })
  }

  return (
    <div className="update__container">
      <form className="update-form__container">
        <h2>categoria: {catId}</h2>
        <label>Nombre</label> <br />
        <input
          placeholder="Nombre"
          value={nombreCat}
          onChange={(e) => setNombreCat(e.target.value)}
        /><br />

        <label>Imagen Url</label> <br />
        <input
          placeholder="Imagen_url"
          value={imagenCat}
          onChange={(e) => setImagenCat(e.target.value)}
        /> <br />
        <br />
        <div className="buttons-container">
          <Link className="text-fix" to='/readcategorias'>
            <button id="first-button" onClick={() => updateCategoria()} type="submit">ACEPTAR <Check className="button-icons" /></button>
          </Link>
          <Link className="text-fix" to='/readcategorias'>
            <button>CANCELAR <X className="button-icons" /></button>
          </Link>
        </div>
      </form>
    </div>
  )
}


export default UpdateCategorias