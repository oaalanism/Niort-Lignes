/*global google*/
import React from 'react';
import MarkerStation from './MarkerStation';
import data from './data/Ligne1.json';

const stations = data.stations;

const redIcon = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "white",
    fillOpacity: 0.9,
    scale: 5,
    strokeColor: "red",
    strokeWeight: 1,
};

function MarkerStations(){

    return(
        stations.map( station => (
            <MarkerStation name={station.nom} position={{lat: station.lat, lng: station.lng}} color="red" />
        ))
    )
}

export default MarkerStations;