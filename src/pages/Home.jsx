import React from 'react';
import '../styles/Home.scss';
import Banner from '../components/Banner'
import About from '../components/About'
//import Gallery from '../components/Gallery'
import GalleryContainer from '../containers/GalleryContainer';
import Entrada from '../components/Entrada';



const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='background'>
                    <div className='contenedor'>
                        <Banner />
                    </div>
                </div>
            </div>
            <About />
            <hr className='hr-divisor' />
            <GalleryContainer />
            <Entrada />
        </div>
    )
}

export default Home;