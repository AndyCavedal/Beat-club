import React, { useState, useEffect  } from 'react';
import '../styles/Bienvenida.scss';
import { useSpring, animated } from 'react-spring';

const Bienvenida = () => {
    const [scrollPosY, setScrollPosY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const titleSpring = useSpring({
        transform: `translateY(-${scrollPosY * 0.3}px)`,
    });

    return (
        <div className='menu__container'>
            <div className='bienvenida-background' id='background-down'>
                <animated.h1 className='menu-title' style={titleSpring}>Bienvenidos a <br /> Beat<span> CLUB</span></animated.h1>
            </div>
        </div>
    )
}

export default Bienvenida;