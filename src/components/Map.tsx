import styles from '@/styles/Map.module.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import Locate from './Locate';

const Map = (): JSX.Element => {
  return (
    <MapContainer center={[0, 0]} zoom={10} className={styles.root}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Locate />
    </MapContainer>
  );
};

export default Map;
