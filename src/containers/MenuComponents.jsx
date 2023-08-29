import React, { lazy, Suspense } from 'react';
import MenuBienvenida from '../components/MenuBienvenida';
const MenuMobileWidget = lazy(() => import('../components/MenuMobileWidgets'));
const MenuPagos = lazy(() => import('../components/MenuPagos'));
const MenuCarta = lazy(() => import('../components/MenuCarta'));
import { ScaleLoader } from 'react-spinners'

const MenuComponents = () => {
    return (
        <div>
            <MenuBienvenida/>
            <Suspense fallback={<div className="loading-message general">
                <ScaleLoader
                    color="#A80038"
                    height={70}
                    margin={4}
                    width={8}
                />
            </div>}>
                <MenuMobileWidget/>
                <MenuCarta/>
                <MenuPagos/>
            </Suspense>
        </div>
    )
}

export default MenuComponents;