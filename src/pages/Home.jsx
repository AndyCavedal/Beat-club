import React from 'react';
import '../styles/Home.scss';
import Banner from '../components/Banner'
import About from '../components/About'
import Gallery from '../components/Gallery'
import GalleryContainer from '../containers/GalleryContainer';
import Entrada from '../components/Entrada'; 
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div className='home-container'>
            <div className='background'>
                <div className='contenedor'>
                    <Banner />
                </div>
            </div>
            <About />
            <hr className='hr-divisor'/>
            <GalleryContainer />
            <Entrada />
            <Footer/>
        </div>
    )
}

export default Home;