import React from 'react';

const NotFound = () => {

    const styleError = {
        color: 'white',
    };

    return (
    <div>
        <h2 style={styleError}>Pagina no encontrada, error 404.</h2>
    </div>
    );
}

export default NotFound;