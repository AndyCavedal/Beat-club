import React, { useState, useEffect  } from 'react';
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
                    <img src={vinos} alt="seccion vinos" loading="lazy" />
                    <Link className='menu-btn' to="vinos" smooth={true} duration={1000} href="#vinos">VINOS</Link>
                </div>
                <div className="grid-item">
                    <img src={picadas} alt="seccion picadas" loading="lazy" />
                    <Link className='menu-btn' to="picadas" smooth={true} duration={1000} href="#picadas">PICADAS</Link>
                </div>
                <div className="grid-item">
                    <img src={bebidas} alt="seccion bebidas" loading="lazy" />
                    <Link className='menu-btn' to="bebidas" smooth={true} duration={1000} href="#bebidas" >BEBIDAS</Link>
                </div>
                <div className="grid-item">
                    <img src={sandwichs} alt="seccion sandwichs" loading="lazy" />
                    <Link className='menu-btn' to="sandwiches" smooth={true} duration={1000} href="#sandwiches" >SANDWICHS</Link>
                </div>
                <div className="grid-item">
                    <img src={burgers} alt="seccion burgers" loading="lazy" />
                    <Link className='menu-btn' to="burgers" smooth={true} duration={1000} href="#burgers" >BURGERS</Link>
                </div>
                <div className="grid-item">
                    <img src={promos} alt="seccion promos" loading="lazy" />
                    <Link className='menu-btn' to="promociones" smooth={true} duration={1000} href="#promociones" >PROMOS</Link>
                </div>
                <div className="grid-item">
                    <img src={postres} alt="seccion postres" loading="lazy" />
                    <Link className='menu-btn' to="postres" smooth={true} duration={1000} href="#postres">POSTRES</Link>
                </div>
                <div className="grid-item">
                    <img src={tragos} alt="seccion tragos" loading="lazy" />
                    <Link className='menu-btn' to="forever young" smooth={true} duration={1000} href="#forever young">TRAGOS</Link>
                </div>
                <div className="grid-item">
                    <img src={whiskys} alt="seccion whiskys" loading="lazy" />
                    <Link className='menu-btn' to="speakeasy licor scotch" smooth={true} duration={1000} href="#speakeasy licor scotch" >WHISKYS</Link>
                </div>
                <div className="grid-item">
                    <img src={ensaladas} alt="seccion ensaladas" loading="lazy" />
                    <Link className='menu-btn' to="ensaladas" smooth={true} duration={500} href="#ensaladas">ENSALADAS</Link>
                </div>
            </div>
        </div>
    );
}

export default MenuMobileWidget;