import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Formulario.scss';

const Formulario = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yvxia8w', 'template_c83lem7', form.current, '32Z8b9wgYpM0yQ3ER')
            .then((result) => {
                alert('Mensaje Enviado!')
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='form__container'>
            <h2 className='title'>Envianos un mensaje</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type='text'
                    name='user_name'
                    placeholder="Nombre"
                    required

                />
                <input
                    type='text'
                    name='user_number'
                    placeholder="Telefono"


                />
                <input
                    type='email'
                    name='user_email'
                    placeholder="Correo"

                /> <br />
                <textarea id="message" name="message" rows="4" ></textarea>
                <input type="submit" value="Enviar" className='form-submit' placeholder="Mensaje"/>
            </form>
        </div>
    )
};

export default Formulario;