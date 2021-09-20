import React from 'react';
import MarkerStation from './MarkerStation';
import data from './data/Lignes.json';

const Lignes = data.Lignes;

var dictionary = {};
dictionary[1] = "red";

function MarkerStations(props){

    return(

        Lignes.map( Ligne => {
            var Number = Ligne.Number;
            var color = dictionary[Number];
            return Ligne.Stations.map( Station => (
                <MarkerStation 
                    line = {Number}
                    name={Station.nom} 
                    position={{lat: Station.lat, lng: Station.lng}} 
                    color={color} 
                    onClick={props.onClick}

                />
            ))
        } )
    )
}

export default MarkerStations;