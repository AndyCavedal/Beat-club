import '../styles/Menu.scss';
import React from 'react';
import MenuBienvenida from '../components/MenuBienvenida';
import MenuMobileWidget from '../containers/MenuMobileWidgets';
import MenuTable from '../components/MenuTable';
import MenuPagos from '../components/MenuPagos';

const Menu = () =>{
    return(
        <div>
            <MenuBienvenida />
            <MenuMobileWidget />
            <MenuTable />
            <MenuPagos />
        </div>
    )
}

export default Menu;