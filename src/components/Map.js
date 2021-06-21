import { MapContainer, TileLayer } from "react-leaflet";
import IconWithText from './IconWithText';

export default function Map({ lat, long, cases }) {

    const defaultPosition = [lat, long]; // Paris position

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
