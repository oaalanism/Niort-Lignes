import React from 'react';
import { GoogleMap, LoadScript, KmlLayer, InfoWindow} from '@react-google-maps/api';
import MarkerStations from './MarkerStations';
import { useState } from 'react/cjs/react.development';
import { UilBus } from '@iconscout/react-unicons'
import './styles/NiortLines.css';

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

const divStyle = {
    background: `white`,
    padding: 5
}

var color = {};
color[1] = "red";


function NiortLines(){

    const [showInfo, setShowInfo] = useState(false);
    const [posInfo, setPosInfo] = useState(center);
    const [titleInfo, setTitleInfo] = useState("");
    const [currentLine, setCurrentLine] = useState(1);

    const changeInfo = (value) => {
        setShowInfo(value);
    }

    const showInformation = (line, name, position) => {
        setCurrentLine(line);
        setTitleInfo(name);
        setPosInfo(position);
        changeInfo(true);
    }

    const closeInfo = () => {
        changeInfo(false);
    }

    const styleLineStation = {
        borderRadius: '5px',
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: '1px'
    }

    const styleLine = {
        borderTopRightRadius: `3px`,
        borderBottomRightRadius: `3px`,
        backgroundColor: color[currentLine],
        color: "white",
        
    }

    const styleStationName = {
        marginLeft: "2px"
    }

    return(
        
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap id="niort" 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={13}
                clickableIcons={false}
            >
                <KmlLayer url={kmlURL}/>
                <MarkerStations onClick={showInformation}/>
                {
                    showInfo &&
                    <InfoWindow position={posInfo} onCloseClick={closeInfo}>
                        <div class="info" style={divStyle}>
                            <div style={styleLineStation}>
                                <div> <UilBus class="icon" size="20"/> </div> 
                                <div style={styleLine} class="line"> L{currentLine} </div>
                            </div>
                            <div style={styleStationName} class="station-name">{titleInfo} </div> 
                        </div> 
                
                    </InfoWindow>
                }
                
            </GoogleMap>
        </LoadScript>
    )
}

export default NiortLines;