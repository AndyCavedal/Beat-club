import React from 'react';

const NotFound = () => {

    const styleError = {
        color: 'white',
    };

    return (
    <div>
        <h2 style={styleError}>Page not found, error 404.</h2>
    </div>
    );
}

export default NotFound;