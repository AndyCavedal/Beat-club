import React, { useState, useEffect  } from 'react';
import '../styles/MenuBienvenida.scss';
import { useSpring, animated } from 'react-spring';

const MenuBienvenida = () => {
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
            <div className='menu-background'>
                <animated.h1 className='menu-title' style={titleSpring}>Bienvenidos a <br /> Beat<span> CLUB</span></animated.h1>
            </div>
        </div>
    );
}

export default MenuBienvenida;