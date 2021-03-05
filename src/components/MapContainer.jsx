import React from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
    maxWidth: '660px',
    maxHeight: '525px',
  }

export function MapContainer(props) {
    return <Map google={props.google} zoom={8} style={containerStyle}></Map>
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY
  })(MapContainer)

