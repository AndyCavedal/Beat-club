import React from 'react';
import SimpleSlider from '../components/TestCarrousel';

const NotFound = () => {

    const styleError = {
        color: 'white',
    };

    return (
    <div>
        <h2 style={styleError}>Page not found, error 404.</h2>
        <SimpleSlider/>
    </div>
    );
}

export default NotFound;