import React from 'react';
import '../styles/Home.scss';
import Banner from '../components/Banner'
import About from '../components/About'


const Home = () => {
    return (
        <div className='home-container'>
            <div className='background'>
                <div className='contenedor'>
                    <Banner />
                </div>
            </div>
            <About />
        </div>
    )
}

export default Home;