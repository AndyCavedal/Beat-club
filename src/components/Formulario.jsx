import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Formulario.scss';

const Formulario = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yvxia8w', 'template_c83lem7', form.current, '32Z8b9wgYpM0yQ3ER')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='form__container'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Nombre*</label> <br />
                <input
                    type='text'
                    name='user_name'
                    placeholder="Nombre"
                    required

                />
                <label>Telefono/Celular</label> <br />
                <input
                    type='text'
                    name='user_number'
                    placeholder="Telefono"


                />
                <label>Correo Electronico*</label> <br />
                <input
                    type='email'
                    name='user_email'
                    placeholder="Correo"

                /> <br />
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" rows="4" ></textarea>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
};

export default Formulario;