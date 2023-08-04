import React from 'react';
import SimpleSlider from '../components/TestCarrousel';

const NotFound = () => {

    const styleError = {
        color: 'white',
    };

    return (
    <div>
        <h1 style={styleError}>Page not found, error 404.</h1>
        <SimpleSlider/>
    </div>
    );
}

export default NotFound;