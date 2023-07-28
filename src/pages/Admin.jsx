import React from "react";
import '../styles/Admin.scss';
import { Link } from "react-router-dom";

const Admin = ()=> {
    return (
        <div>
            <h2 className="titulo-menu">MENU PARA ADMIN</h2>
            <div>
                <Link to='/readproductos'>
                    <button>Productos</button>
                </Link>
                <Link to='/readeventos'>
                    <button>Eventos</button>
                </Link>
            </div>
        </div>
    );
};

export default Admin;