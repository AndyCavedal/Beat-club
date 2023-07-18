import '../styles/Menu.scss';
import React from 'react';
import MenuBienvenida from '../components/MenuBienvenida';
import MenuMobileWidget from '../containers/MenuMobileWidgets';


const Menu = () =>{
    return(
        <div>
            <MenuBienvenida />
            <MenuMobileWidget/>
        </div>
    )
}

export default Menu;