import React from 'react';
import '../styles/About.scss';


const About = ({ name }) =>{
    return(
        <div id={name} className='about-panel__container'>
            <div className='about-title__container'>
                <h1 className='about-title'>Acerca de</h1>
                <h2 className='about-subtitle'>Beat Club</h2>
            </div>
            <div className='about-text__container'>
                <p className='about-text'>Beat Club es una sala de espectáculos con bar, un lugar cálido con buen ambiente donde se puede disfrutar tanto de una rica cena, variedad de cócteles y buena música en vivo.</p>
            </div>
        </div>
    )
}


export default About;