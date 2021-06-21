import React, { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from 'leaflet';
import IconWithText from './IconWithText';

export default function Map({ lat, long, cases }) {

    const defaultPosition = [lat, long]; // Paris position
    console.log('map');

    return (
        <MapContainer className="map__container" center={defaultPosition} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <IconWithText text={cases} coords={defaultPosition}/>
        </MapContainer>
    )
}
