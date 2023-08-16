import React from 'react';
import '../styles/MenuMobileWidget.scss';
import { Link } from 'react-scroll';
import vinos from '../assets/menu/vinos.jpg';
import picadas from '../assets/menu/picadas.jpg';
import tragos from '../assets/menu/tragos.jpg';
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
                <Link className='menu-btn' to="vinos" smooth={true} duration={1000} href="#vinos">VINOS</Link>
            </div>
            <div className="grid-item">
                <img src={picadas} alt="seccion picadas" />
                <Link className='menu-btn' to="picadas" smooth={true} duration={1000} href="#picadas">PICADAS</Link>
            </div>
            <div className="grid-item">
                <img src={bebidas} alt="seccion bebidas" />
                <Link className='menu-btn' to="bebidas" smooth={true} duration={1000} href="#bebidas" >BEBIDAS</Link>
            </div>
            <div className="grid-item">
                <img src={sandwichs} alt="seccion sandwichs" />
                <Link className='menu-btn' to="sandwiches" smooth={true} duration={1000} href="#sandwiches" >SANDWICHS</Link>
            </div>
            <div className="grid-item">
                <img src={burgers} alt="seccion burgers" />
                <Link className='menu-btn' to="burgers" smooth={true} duration={1000} href="#burgers" >BURGERS</Link>
            </div>
            <div className="grid-item">
                <img src={promos} alt="seccion promos" />
                <Link className='menu-btn' to="promociones" smooth={true} duration={1000} href="#promociones" >PROMOS</Link>
            </div>
            <div className="grid-item">
                <img src={postres} alt="seccion postres" />
                <Link className='menu-btn' to="postres" smooth={true} duration={1000} href="#postres">POSTRES</Link>
            </div>
            <div className="grid-item">
                <img src={tragos} alt="seccion tragos" />
                <Link className='menu-btn' to="forever young" smooth={true} duration={1000} href="#forever young">TRAGOS</Link>
            </div>
            <div className="grid-item">
                <img src={whiskys} alt="seccion whiskys" />
                <Link className='menu-btn' to="speakeasy licor scotch" smooth={true} duration={1000} href="#speakeasy licor scotch" >WHISKYS</Link>
            </div>
            <div className="grid-item">
                <img src={ensaladas} alt="seccion ensaladas" />
                <Link className='menu-btn' to="ensaladas" smooth={true} duration={500} href="#ensaladas">ENSALADAS</Link>
            </div>
        </div>
    );
}

export default MenuMobileWidget;