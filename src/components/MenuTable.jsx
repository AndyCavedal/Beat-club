import React from 'react';
import '../styles/MenuTable.scss';
import vinos from '../assets/menu/vinos-carta.jpg';


const MenuTable = () => {

    // Datos de ejemplo para el menú (nombre y precio)
    const menuItems = [
        { name: 'Paradigma - Domaine ST Diego', price: "3,700.00" },
        { name: 'Pura Sangre - Domaine ST Diego', price: "4,200.00" },
        { name: 'Pura Sangre 9 Lunas - Domaine ST Diego', price: "8,000.00" },
        { name: 'Casa Boher - Gran Reserva', price: "6,100.00" },
        { name: 'Casa Boher - Gran Corte9400', price: "9,400.00" },
        { name: 'Cabernet Frank-Santa Bax (Orgnanico)', price: "3,000.00" },
        { name: 'Septima Obra - Tardio 500ml', price: "2,000.00" },
        { name: 'Copa de Vino 150ml', price: "600.00" },
        // Agrega más elementos según tus necesidades
    ];

    return (

        <div>
            <div className='img__container'>
                <img src={vinos} alt="imagen vinos" />
            </div>
            <div className='table__container'>
                <h2 className='food-title'>Vinos</h2>
                <table className='table'>
                    <thead className='thead'>
                        <tr className='tr'>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {menuItems.map((item, index) => (
                            <tr className='tr' key={index}>
                                <td className='td'>{item.name}</td>
                                <td className='td'>${item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MenuTable;