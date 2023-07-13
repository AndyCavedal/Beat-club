import React from 'react';
import '../styles/Home.scss';
import neon from '../assets/logoneon.svg';


const Home = () =>{

    
    return(
        <div className='background'>
            <img src={neon} alt="s" className='neon'/>
        </div>
    )
}


export default Home;