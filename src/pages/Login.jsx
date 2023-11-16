import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.scss';
import { useAuth } from '../context/authContext';

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { login } = useAuth();

    const navigate = useNavigate();

    const [error, setError] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await login(user.email, user.password);
            navigate("/root");
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/invalid-email"){
                setError('Correo invalido')
            }
            // setError(error.message);
        }
    };


    return (
        <div className='login-container'>
            {error && <p>{error}</p>}
            <form className='login-form' onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
                <div>
                    <input
                        type="email"
                        placeholder='Ingrese Email'
                        onChange={handleChange}
                        name='email'
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder='Contraseña'
                        onChange={handleChange}
                        name='password'
                        id='password'
                        required
                    />
                </div>
                <button type="submit">Verificar</button>
            </form>
        </div>
    );
};

export default Login;