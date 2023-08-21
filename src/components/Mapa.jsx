import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../styles/Mapa.scss';


const Mapa = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    console.log("Clave Api:", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    const { isLoaded } = useLoadScript({
        apiKey,
    });

    if (!isLoaded) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <GoogleMap zoom={16} center={{ lat: -32.88157557361522, lng: -68.84626392049435 }} mapContainerClassName='map__container'
            >
            <Marker position={{ lat: -32.88157557361522, lng: -68.84626392049435 }} />
            </GoogleMap>
        </div>
    )

}

export default Mapa;