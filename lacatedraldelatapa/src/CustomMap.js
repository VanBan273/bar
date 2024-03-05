// src/Map.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const Map = ({ apiKey, address }) => {
  const center = { lat: 37.7749, lng: -122.4194 }; // Reemplaza con tus coordenadas reales

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "200px" }}
        zoom={15}
        center={center}
      />
    </LoadScript>
  );
};

export default Map;
