import React from "react";
import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "100vh",
  width: "100%"
};

const center = {
  lat: 37.7749, 
  lng: -122.4194 
};

const path = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 37.7849, lng: -122.4294 }
];

const MapComponent = () => (
  <LoadScript googleMapsApiKey="AIzaSyCaKfaPAL_dR7x44zsB74PHNsDF97ZjRBw">
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={13}
    >
      <Polyline
        path={path}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        }}
      />
    </GoogleMap>
  </LoadScript>
);

export default MapComponent;
