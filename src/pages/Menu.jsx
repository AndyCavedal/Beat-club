import '../styles/Menu.scss';
import React from 'react';
import MenuBienvenida from '../components/MenuBienvenida';
import MenuMobileWidget from '../containers/MenuMobileWidgets';
import MenuTable from '../components/MenuTable';

const Menu = () =>{
    return(
        <div>
            <MenuBienvenida />
            <MenuMobileWidget />
            <MenuTable />
        </div>
    )
}

export default Menu;