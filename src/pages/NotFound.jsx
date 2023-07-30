import React from 'react';

const NotFound = () => {

    const styleError = {
        color: 'white',
    };

    return (
    <div>
        <h1 style={styleError}>Page not found, error 404.</h1>
    </div>
    );
}

export default NotFound;