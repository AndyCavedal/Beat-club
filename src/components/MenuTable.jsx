import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/MenuTable.scss';
import imgVinos from '../assets/menu/vinos-carta.jpg';
import imgEspumante from '../assets/menu/espumantes.jpg'
import imgPromos from '../assets/menu/promos.png';
import imgPicadas from '../assets/menu/picadas.jpg';
import imgPostres from '../assets/menu/postres.jpeg';
import imgSandwiches from '../assets/menu/sandwichs.jpg';
import imgEnsaladas from '../assets/menu/ensaladas.jpeg';
import imgBebidas from '../assets/menu/bebidas.jpg';
import imgTragos from '../assets/menu/tragos.jpg';
import imgForeverYoung from '../assets/menu/forever-young.jpeg';
import imgTimeForGin from '../assets/menu/gin.jpg';
import imgWeLoveRon from '../assets/menu/ron.png';
import imgSpeakeasyLicor from '../assets/menu/speakeasy-licor.jpg';
import imgIrish from '../assets/menu/irish.jpg';
import imgAmerican from '../assets/menu/american.jpeg';
import imgBurgers from '../assets/menu/burgers.jpg';



const MenuTable = () => {

    const [vinos, setVinos] = useState([])
    const [espumante, setEspumante] = useState([])
    const [promos, setPromos] = useState([])
    const [foreverYoung, setForeverYoung] = useState([])
    const [timeForGin, setTimeForGin] = useState([])
    const [weLoveRon, setWeLoveRon] = useState([])
    const [speakeasyLicor, setSpeakeasyLicor] = useState([])
    const [irish, setIrish] = useState([])
    const [american, setAmerican] = useState([])
    const [bebidas, setBebidas] = useState([])
    const [picadas, setPicadas] = useState([])
    const [sandwiches, setSandwiches] = useState([])
    const [ensaladas, setEnsaladas] = useState([])
    const [burgers, setBurgers] = useState([])
    const [postres, setPostres] = useState([])


    useEffect(() => {
        getVino()
        getEspumante()
        getPromos()
        getForeverYoung()
        getTimeForGin()
        getWeLoveRon()
        getSpeakeasyLicor()
        getIrish()
        getAmerican()
        getBebidas()
        getPicadas()
        getSandwiches()
        getEnsaladas()
        getBurgers()
        getPostres()
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

    function getPromos() {
        axios.get("https://server-api-beat-club.vercel.app/productos/promociones").then((resp) => {
            setPromos(resp.data)
        })
    }

    function getForeverYoung() {
        axios.get("https://server-api-beat-club.vercel.app/productos/Forever-young").then((resp) => {
            setForeverYoung(resp.data)
        })
    }

    function getTimeForGin() {
        axios.get("https://server-api-beat-club.vercel.app/productos/its-time-for-gin").then((resp) => {
            setTimeForGin(resp.data)
        })
    }
    
    function getWeLoveRon() {
        axios.get("https://server-api-beat-club.vercel.app/productos/we-love-ron").then((resp) => {
            setWeLoveRon(resp.data)
        })
    }

    function getSpeakeasyLicor() {
        axios.get("https://server-api-beat-club.vercel.app/productos/speakeasy-licor-scotch").then((resp) => {
            setSpeakeasyLicor(resp.data)
        })
    }

    function getIrish() {
        axios.get("https://server-api-beat-club.vercel.app/productos/irish").then((resp) => {
            setIrish(resp.data)
        })
    }

    function getTimeForGin() {
        axios.get("https://server-api-beat-club.vercel.app/productos/its-time-for-gin").then((resp) => {
            setTimeForGin(resp.data)
        })
    }

    function getAmerican() {
        axios.get("https://server-api-beat-club.vercel.app/productos/american").then((resp) => {
            setAmerican(resp.data)
        })
    }

    function getBebidas() {
        axios.get("https://server-api-beat-club.vercel.app/productos/bebidas").then((resp) => {
            setBebidas(resp.data)
        })
    }

    function getPicadas() {
        axios.get("https://server-api-beat-club.vercel.app/productos/picadas").then((resp) => {
            setPicadas(resp.data)
        })
    }

    function getSandwiches() {
        axios.get("https://server-api-beat-club.vercel.app/productos/sandwiches").then((resp) => {
            setSandwiches(resp.data)
        })
    }

    function getEnsaladas() {
        axios.get("https://server-api-beat-club.vercel.app/productos/ensaladas").then((resp) => {
            setEnsaladas(resp.data)
        })
    }

    function getPostres() {
        axios.get("https://server-api-beat-club.vercel.app/productos/postres").then((resp) => {
            setPostres(resp.data)
        })
    }

    function getBurgers() {
        axios.get("https://server-api-beat-club.vercel.app/productos/burgers").then((resp) => {
            setBurgers(resp.data)
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgEspumante} alt="imagen espumantes" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgEspumante} alt="imagen espumantes" />
                    </div>
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgPromos} alt="imagen espumantes" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgPromos} alt="imagen espumantes" />
                    </div>
                    <h2 className='food-title'>Promos</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {promos.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgForeverYoung} alt="imagen Forever Young" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgForeverYoung} alt="imagen Forever Young" />
                    </div>
                    <h2 className='food-title'>Forever Young</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {foreverYoung.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgTimeForGin} alt="imagen Gin" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgTimeForGin} alt="imagen Gin" />
                    </div>
                    <h2 className='food-title'>It's Time For Gin</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {timeForGin.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgWeLoveRon} alt="imagen Ron" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgWeLoveRon} alt="imagen Ron" />
                    </div>
                    <h2 className='food-title'>We Love Ron</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {weLoveRon.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgSpeakeasyLicor} alt="imagen Speakeasy Licor Scotch" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgSpeakeasyLicor} alt="imagen Speakeasy Licor Scotch" />
                    </div>
                    <h2 className='food-title'>Speakeasy Licor Scotch</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {speakeasyLicor.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgIrish} alt="imagen Irish" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgIrish} alt="imagen Irish" />
                    </div>
                    <h2 className='food-title'>Irish</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {irish.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgAmerican} alt="imagen American" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgAmerican} alt="imagen American" />
                    </div>
                    <h2 className='food-title'>American</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {american.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgBebidas} alt="imagen bebidas" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgBebidas} alt="imagen bebidas" />
                    </div>
                    <h2 className='food-title'>Bebidas</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {bebidas.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgPicadas} alt="imagen picadas" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgPicadas} alt="imagen picadas" />
                    </div>
                    <h2 className='food-title'>Picadas</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {picadas.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgSandwiches} alt="imagen sandwiches" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgSandwiches} alt="imagen sandwiches" />
                    </div>
                    <h2 className='food-title'>Sandwiches</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {sandwiches.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgEnsaladas} alt="imagen Ensaladas" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgEnsaladas} alt="imagen Ensaladas" />
                    </div>
                    <h2 className='food-title'>Ensaladas</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {ensaladas.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgBurgers} alt="imagen Burgers" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgBurgers} alt="imagen Burgers" />
                    </div>
                    <h2 className='food-title'>Burgers</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {burgers.map((item, index) => (
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
            <div className='tables__container'>
                <div className='square square-left'>
                    <img src={imgPostres} alt="imagen Postres" />
                </div>
                <div className='square square-right'>
                    <div className='foto-responsive'>
                        <img src={imgPostres} alt="imagen Postres" />
                    </div>
                    <h2 className='food-title'>Postres</h2>
                    <table className='table'>
                        <thead className='thead'>
                            <tr className='tr'>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {postres.map((item, index) => (
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
        </div>
    );
};

export default MenuTable;