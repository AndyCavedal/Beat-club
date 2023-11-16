import React from "react";
import '../styles/Admin.scss';
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ScaleLoader } from 'react-spinners'

const Admin = ()=> {

    const {logout, loading} = useAuth()

    const handleLogout = async()=>{
        await logout()
        
    }

    if(loading) return (<div className="loading-message">
    <ScaleLoader
        color="#A80038"
        height={70}
        margin={4}
        width={8}
    />
</div>
    )

    return (
        <div className="root-interface__container">
            <h2>Menu Admin</h2>
            <div className="buttons__container">
                <Link to='/readproductos'>
                    <button>Productos</button>
                </Link>
                <Link to='/readeventos'>
                    <button>Eventos</button>
                </Link>
                <Link to='/readcategorias'>
                    <button>Categorias</button>
                </Link>
            </div>
            <div>
                <button onClick={handleLogout}>
                    Salir
                </button>
            </div>
        </div>
    );
};

export default Admin;