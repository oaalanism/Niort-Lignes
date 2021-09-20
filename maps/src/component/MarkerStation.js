/*global google*/
import React, { useState } from 'react';
import { Marker} from '@react-google-maps/api';



function MarkerStation(props){
    const [line,] = useState(props.line);
    const [name, ] = useState(props.name);
    const [position, ] = useState(props.position);
    const [color, ] = useState(props.color);

    const icon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "white",
        fillOpacity: 0.9,
        scale: 5,
        strokeColor: color,
        strokeWeight: 1,
    };

    function handle(){
        props.onClick(line, name, position);
    }

    return(
        <Marker 
                clickable="false"
                position={position} 
                icon={icon}
                title={name}
                onClick={handle}
        />
    )
}

export default MarkerStation;