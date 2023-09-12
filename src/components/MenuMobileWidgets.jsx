import React, { useState, useEffect } from 'react';
import '../styles/MenuMobileWidget.scss';
import { Link } from 'react-scroll';
import vinos from '../assets/menu/vinos.webp';
import picadas from '../assets/menu/picadas.webp';
import tragos from '../assets/menu/tragos.webp';
import promos from '../assets/menu/promo-beat-scape.webp';
import whiskys from '../assets/menu/whiskys1.webp';
import burgers from '../assets/menu/burgers.webp';
import postres from '../assets/menu/postres.webp';
import sandwichs from '../assets/menu/sandwichs.webp';
import bebidas from '../assets/menu/bebidas.webp';
import ensaladas from '../assets/menu/ensalada.webp';


const MenuMobileWidget = () => {

    // const [scrollPosY, setScrollPosY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollPosY(window.scrollY * 0.2);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const translateYValue = -scrollPosY;

    return (
        <div>
            <div className="grid-container">
                <h2 className="widgets-title">Nuestra Carta</h2>
                <div className="grid-item">
                    <Link className='menu-btn' to="vinos" smooth={true} duration={1000} href="#vinos">
                        <img src={vinos} alt="Categoria del Menu de vinos" loading="lazy" />
                        VINOS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="picadas" smooth={true} duration={1000} href="#picadas">
                        <img src={picadas} alt="Categoria del Menu de picadas" loading="lazy" />
                        PICADAS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="bebidas" smooth={true} duration={1000} href="#bebidas" >
                        <img src={bebidas} alt="Categoria del Menu de bebidas" loading="lazy" />
                        BEBIDAS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="sandwiches" smooth={true} duration={1000} href="#sandwiches" >
                        <img src={sandwichs} alt="Categoria del Menu de sandwichs" loading="lazy" />
                        SANDWICHS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="burgers" smooth={true} duration={1000} href="#burgers" >
                        <img src={burgers} alt="Categoria del Menu de burgers" loading="lazy" />
                        BURGERS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="promociones" smooth={true} duration={1000} href="#promociones" >
                        <img src={promos} alt="Categoria del Menu de promos" loading="lazy" />
                        PROMOS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="postres" smooth={true} duration={1000} href="#postres">
                        <img src={postres} alt="Categoria del Menu de postres" loading="lazy" />
                        POSTRES</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="forever young" smooth={true} duration={1000} href="#forever young">
                        <img src={tragos} alt="Categoria del Menu de tragos" loading="lazy" />
                        TRAGOS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="speakeasy licor scotch" smooth={true} duration={1000} href="#speakeasy licor scotch" >
                        <img src={whiskys} alt="Categoria del Menu de whiskys" loading="lazy" />
                        WHISKYS</Link>
                </div>
                <div className="grid-item">
                    <Link className='menu-btn' to="ensaladas" smooth={true} duration={500} href="#ensaladas">
                        <img src={ensaladas} alt="Categoria del Menu de ensaladas" loading="lazy" />
                        ENSALADAS</Link>
                </div>
            </div>
        </div>
    );
}

export default MenuMobileWidget;