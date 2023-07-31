import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/MenuTable.scss';
import imgVinos from '../assets/menu/vinos-carta.jpg';
import imgEspumante from '../assets/menu/espumantes.jpg'


const MenuTable = () => {

    const [vinos, setVinos] = useState([])
    const [espumante, setEspumante] = useState([])

    useEffect(() => {
        getVino()
        getEspumante()
    }, [])

    function getVino() {
        axios.get("https://server-api-beat-club.vercel.app/productos/vino").then((resp) => {
            setVinos(resp.data);
        })
    }

    function getEspumante() {
        axios.get("https://server-api-beat-club.vercel.app/productos/espumante").then((resp) => {
            setEspumante(resp.data)
        })
    }


    return (

        <div>
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgVinos} alt="imagen vinos" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgVinos} alt="imagen vinos" />
                    </div>
                    <h2 className='food-title'>Vinos</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {vinos.map((item, index) => (
                                <tr className='tr' key={index}>
                                    <td className='td'>{item.nombre}</td>
                                    <td className='td'>${item.precio}</td>
                                </tr>
                            ))}
                        </tbody>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className='img__container'>
                <img src={imgEspumante} alt="imagen vinos" />
            </div>
            <div className='table__container'>
                <h2 className='food-title'>Espumante</h2>
                <table className='table'>
                    <thead className='thead'>
                        <tr className='tr'>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {espumante.map((item, index) => (
                            <tr className='tr' key={index}>
                                <td className='td'>{item.nombre}</td>
                                <td className='td'>${item.precio}</td>
                            </tr>
                        ))}
                    </tbody>
                    <thead className='thead'>
                        <tr className='tr'>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default MenuTable;