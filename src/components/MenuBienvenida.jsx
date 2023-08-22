import React from 'react';
import '../styles/MenuBienvenida.scss';

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
    return (
        <div className='menu__container'>
            <div className='menu-background' style={{ transform: `translateY(-${scrollPosY}px)` }}>
            <h1 className='menu-title'>Bienvenidos a <br></br> Beat Club Mendoza</h1>
            </div>
        </div>
    );
}

export default MenuBienvenida;