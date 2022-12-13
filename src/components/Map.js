import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from 'react-redux';
import numberWithSpaces from '../functions/numberWithSpaces';
import IconWithText from './IconWithText';

export default function Map({ lat, long, cases, style }) {
    const mapInfo = useSelector(state => state.covid.mapInfo)
    const defaultPosition = [51.509865, -0.118092];
    let posToShow;
    if(lat && long){
        posToShow = [lat, long]
    } else {
        posToShow = defaultPosition
    }
    
    if(Array.isArray(mapInfo) && mapInfo.length > 0){
        return (
            <MapContainer className="map__container" style={style} center={[49, 32]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapInfo.map(e => {
                    const posToShow = [e.lat, e.long]
                    return <IconWithText text={numberWithSpaces(e.cases)} coords={posToShow}/>
                })}
                
            </MapContainer>
        )
    }

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
