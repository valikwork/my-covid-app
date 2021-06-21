import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from "react-leaflet";
import IconWithText from './IconWithText';

export default function Map({ lat, long, cases, style, data }) {

    const defaultPosition = [51.509865, -0.118092];
    let posToShow;
    if(lat && long){
        posToShow = [lat, long]
    } else {
        posToShow = defaultPosition
    }
    console.log(data[0].countryInfo);

    return (
        <MapContainer className="map__container" style={style} center={posToShow} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <IconWithText text={cases} coords={posToShow}/>
        </MapContainer>
    )
}
