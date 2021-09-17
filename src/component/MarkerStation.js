/*global google*/
import React, { useState } from 'react';
import { Marker } from '@react-google-maps/api';



function MarkerStation(props){
    const [name, setName] = useState(props.name);
    const [position, setPosition] = useState(props.position);
    const [layer, setLayer] = useState(false);
    const [color, setColor] = useState(props.color);

    const icon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "white",
        fillOpacity: 0.9,
        scale: 5,
        strokeColor: color,
        strokeWeight: 1,
    };

    function mouseOver(){
        if(layer ) setLayer(false);
        else setLayer(true);
    }

    return(
        <Marker position={position} onMouseOver={mouseOver} icon={icon} />
    )
}

export default MarkerStation;