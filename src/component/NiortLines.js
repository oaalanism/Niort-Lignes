import React from 'react';
import { GoogleMap, LoadScript, KmlLayer} from '@react-google-maps/api';
import MarkerStations from './MarkerStations';

const apiKey = "AIzaSyCrjtmvtZDrxJmRqKfRJmSyxguoC_XybzM";

const kmlURL = "https://oaalanism.github.io/kml/Niort-L1.kml?ver=" + (new Date()).getTime();


const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 46.32699906191614, 
    lng: -0.4899292662688004
};

function NiortLines(){

    return(
        
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
                <KmlLayer url={kmlURL}/>
                <MarkerStations/>
            </GoogleMap>
        </LoadScript>
    )
}

export default NiortLines;