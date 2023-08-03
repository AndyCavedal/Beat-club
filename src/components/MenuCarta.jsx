import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/MenuTable.scss';


const PruebaMenu = () => {
    const [productos, setProductos] = useState({});

    useEffect(() => {
        getProductos();
    }, []);

    async function getProductos() {
        try {
            const resp = await axios.get("https://server-api-beat-club.vercel.app/Productos");
            // Organizar los productos por categoría
            const productosPorCategoria = {};
            resp.data.forEach((producto) => {
                if (producto.categoria_id in productosPorCategoria) {
                    productosPorCategoria[producto.categoria_id].productos.push(producto);
                } else {
                    productosPorCategoria[producto.categoria_id] = {
                        categoria_nombre: producto.categoria_nombre,
                        categoria_imagen_url: producto.categoria_imagen_url,
                        productos: [producto],
                    };
                }
            });
            setProductos(productosPorCategoria);
        } catch (error) {
            console.error("problemas", error);
        }
    }

    return (
        <div>
            {Object.entries(productos).map(([categoriaId, categoriaData]) => (
                <div key={categoriaId} className="tables__container" data-aos="zoom-in-down" data-aos-duration="500">
                    <div className="square square-left">
                        <img src={categoriaData.categoria_imagen_url} alt={`imagen ${categoriaData.categoria_nombre}`} />
                    </div>
                    <div className="square square-right">
                        <div className="foto-responsive">
                            <img src={categoriaData.categoria_imagen_url} alt={`imagen ${categoriaData.categoria_nombre}`} />
                        </div>
                        <h2 className="food-title">{categoriaData.categoria_nombre}</h2>
                        <table className="table">
                            <thead className="thead">
                                <tr className="tr">
                                    {/* Cabecera de la tabla si es necesario */}
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                {categoriaData.productos.map((producto, index) => (
                                    <tr className="tr tr-grid" key={index}>
                                        <td className="td">{producto.nombre}</td>
                                        <td className="td">${producto.precio}</td>
                                        <td className="descripcion">{producto.descripcion}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead className="thead">
                                <tr className="tr">
                                    {/* Cabecera de la tabla si es necesario */}
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default PruebaMenu;