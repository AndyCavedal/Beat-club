import React from 'react';
import '../styles/About.scss';


const About = ({ name }) =>{
    return(
        <div id={name} className='about-panel__container'>
            <div id='about-section' className='about-title__container'>
                <h2 className='about-title'>Acerca de</h2>
                <h3 className='about-subtitle'>Beat <span className='club-text'>Club</span></h3>
            </div>
            <div className='about-text__container'>
                <p className='about-text'>Beat Club es una sala de espectáculos con bar, un lugar cálido con buen ambiente donde se puede disfrutar tanto de una rica cena, variedad de cócteles y buena música en vivo.</p>
            </div>
        </div>
    )
}


export default About;