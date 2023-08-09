import React from 'react';
import '../styles/MenuMobileWidget.scss';
import vinos from '../assets/menu/vinos.jpg';
import picadas from '../assets/menu/picadas.jpg';
import tragos from '../assets/menu/tragos.jpg';
//import espumantes from '../assets/menu/espumantes.jpg';
import promos from '../assets/menu/promos.svg';
import whiskys from '../assets/menu/whiskys.jpg';
import burgers from '../assets/menu/burgers.jpg';
import postres from '../assets/menu/postres.jpeg';
import sandwichs from '../assets/menu/sandwichs.jpg';
import bebidas from '../assets/menu/bebidas.jpg';
import ensaladas from '../assets/menu/ensaladas.jpeg';


const MenuMobileWidget = () => {
    return (
        <div className="grid-container">
            <h2 className="widgets-title">Nuestra Carta</h2>
            <div className="grid-item">
                <img src={vinos} alt="seccion vinos" />
                <a className='menu-btn' href="#vinos">VINOS</a>
            </div>
            <div className="grid-item">
                <img src={picadas} alt="seccion picadas" />
                <a className='menu-btn' href="#picadas">PICADAS</a>
            </div>
            <div className="grid-item">
                <img src={bebidas} alt="seccion bebidas" />
                <a className='menu-btn' href="#bebidas">BEBIDAS</a>
            </div>
            <div className="grid-item">
                <img src={sandwichs} alt="seccion sandwichs" />
                <a className='menu-btn' href="#sandwiches">SANDWICHS</a>
            </div>
            <div className="grid-item">
                <img src={burgers} alt="seccion burgers" />
                <a className='menu-btn' href="#burgers">BURGERS</a>
            </div>
            <div className="grid-item">
                <img src={promos} alt="seccion promos" />
                <a className='menu-btn' href="#promociones">PROMOS</a>
            </div>
            <div className="grid-item">
                <img src={postres} alt="seccion postres" />
                <a className='menu-btn' href="#postres">POSTRES</a>
            </div>
            <div className="grid-item">
                <img src={tragos} alt="seccion tragos" />
                <a className='menu-btn' href="#forever young">TRAGOS</a>
            </div>
            <div className="grid-item">
                <img src={whiskys} alt="seccion whiskys" />
                <a className='menu-btn' href="#speakeasy licor scotch">WHISKYS</a>
            </div>
            <div className="grid-item">
                <img src={ensaladas} alt="seccion ensaladas" />
                <a className='menu-btn' href="#ensaladas">ENSALADAS</a>
            </div>
        </div>
    );
}

export default MenuMobileWidget;