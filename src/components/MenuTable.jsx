import React from 'react';
import '../styles/MenuTable.scss';

const MenuTable = () => {

    // Datos de ejemplo para el menú (nombre y precio)
    const menuItems = [
        { name: 'Hamburguesa', price: 10 },
        { name: 'Pizza', price: 12 },
        { name: 'Ensalada', price: 8 },
        // Agrega más elementos según tus necesidades
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {menuItems.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MenuTable;