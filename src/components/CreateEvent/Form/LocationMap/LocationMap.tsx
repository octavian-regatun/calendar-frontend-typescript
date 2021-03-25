import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { ChangeLocation } from "./ChangeLocation";
import styles from "./LocationMap.module.css";
import { PickedLocation } from "./PickedLocation";

export const LocationMap: React.FC = () => {
  return (
    <MapContainer center={[0, 0]} zoom={13} className={styles.map}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeLocation />
      <PickedLocation />
    </MapContainer>
  );
};
