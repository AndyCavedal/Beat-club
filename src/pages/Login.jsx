import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.scss';

const Login = () => {
    const [body, setBody] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    //para el mensaje de error
    const [errorMessage, setErrorMessage] = useState('');

    const inputChange = (e) => {
        const { name, value } = e.target;
        setBody({
            ...body,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('https://server-api-beat-club.vercel.app/api/login', body)
            .then(({ data }) => {
                localStorage.setItem('auth', '"yes"');
                navigate('/root'); // Redirige al usuario a la página protegida
                console.log(data);
            })
            .catch(({ response }) => {
                console.log(response.data);
                setErrorMessage('Verificación Incorrecta');
            });
    };

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={onSubmit}>
            <h2>Iniciar Sesión</h2>
                <div>
                    <input
                        type="text"
                        placeholder='Usuario'
                        value={body.username}
                        onChange={inputChange}
                        name='username'
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder='Contraseña'
                        value={body.password}
                        onChange={inputChange}
                        name='password'
                        required
                    />
                </div>
                <button type="submit">Verificar</button>
            {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Login;