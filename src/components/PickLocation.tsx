import { useMapState } from '@/lib/store';
import { LatLng } from 'leaflet';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const PickLocation = (): JSX.Element | null => {
  const coordinates = useMapState(state => state.coordinates);
  const setCoordinates = useMapState(state => state.updateCoordinates);

  useMapEvents({
    click(e) {
      setCoordinates({ lat: e.latlng.lat, lon: e.latlng.lng });
    },
  });

  return coordinates ? (
    <Marker
      position={new LatLng(coordinates.lat, coordinates.lon)}
      eventHandlers={{
        click: () => {
          setCoordinates(undefined);
        },
      }}
    >
      <Popup>Picked Location</Popup>
    </Marker>
  ) : null;
};

export default PickLocation;
