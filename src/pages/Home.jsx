import React from 'react';
import '../styles/Home.scss';
import neon from '../assets/logoneon.svg';


const Home = () =>{

    
    return(
        <div className='background'>
            <img src={neon} alt="s" className='neon'/>
            <h1>Hola</h1>
        </div>
    )
}


export default Home;