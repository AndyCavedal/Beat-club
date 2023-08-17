import React from 'react';
import '../styles/Formulario.scss';

const Formulario = () => {
    return (
        <div className='form__container'>
            <form>
            <label>Nombre*</label> <br />
                    <input
                        placeholder="Nombre"
                        required
                        
                    />
                    <label>Telefono/Celular</label> <br />
                    <input
                        placeholder="Telefono"
                        
                        
                    />
                    <label>Correo Electronico*</label> <br />
                    <input
                        placeholder="Correo"
                        
                    /> <br />
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" rows="4"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default Formulario;