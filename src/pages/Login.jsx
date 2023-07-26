import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.scss';

const Login = () => {
    const [body, setBody] = useState({username: '', password: ''})
    const navigate = useNavigate();


    const inputChange= (e)=>{
        const {name, value} = e.target
        setBody({
            ...body,
            [name] : value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        axios.post('https://server-api-beat-club.vercel.app/api/login', body)
        .then(( {data} )=>{
            navigate('/root')
        })
        .catch(({response})=>{
            console.log(response.data)
        })
    }

    return (
        <div className='form-container'>
            <h2>Iniciar Sesión</h2>
            <form>
                <div>
                    <label>Nombre de Usuario:</label>
                    <input
                        type="text"
                        value={body.username}
                        onChange={inputChange}
                        name='username'
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={body.password}
                        onChange={inputChange}
                        name='password'
                        required
                    />
                </div>
                <button onClick={onSubmit}>Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;