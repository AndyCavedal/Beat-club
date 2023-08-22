import React, { useEffect } from 'react';
import MenuComponents from '../containers/MenuComponents';

const Menu = () =>{
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll al principio de la pagina
    }, []);

    return(
        <div>
            <MenuComponents/>
        </div>
    )
}

export default Menu;