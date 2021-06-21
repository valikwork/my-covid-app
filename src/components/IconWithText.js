import React from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

const IconWithText = props => {
  const text = L.divIcon({ 
    html: `<div class="iconText">${props.text}</div>`, 
    className: "customMarker",
    iconSize: [50, 50]
  });

  return <Marker position={props.coords} icon={text} />;
}

export default IconWithText