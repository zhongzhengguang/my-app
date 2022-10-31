import React, { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div>
      <div className="  z-[-1] object-cover absolute top-0 left-0 w-full h-full">
        <MapContainer
          center={[25.058452802073912, 121.56717401111011]}
          zoom={10}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
