import React from 'react';
import MenuBienvenida from '../components/MenuBienvenida';
import MenuMobileWidget from '../components/MenuMobileWidgets';
import MenuPagos from '../components/MenuPagos';
import MenuCarta from '../components/MenuCarta'

const MenuComponents = () => {
    return (
        <div>
            <MenuBienvenida/>
            <MenuMobileWidget/>
            <MenuCarta/>
            <MenuPagos/>
        </div>
    )
}

export default MenuComponents;