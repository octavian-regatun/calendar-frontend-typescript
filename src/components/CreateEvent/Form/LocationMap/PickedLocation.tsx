import { LatLng } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { locationCurrentEventSetPickedLocation } from "../../../../store/location/action";
import { Store } from "../../../../store/store";

export const PickedLocation: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((store: Store) => store.location);

  const { pickedLatLon: pickedLocation } = location.createEvent;

  useMapEvents({
    click(e) {
      dispatch(
        locationCurrentEventSetPickedLocation({
          lat: e.latlng.lat,
          lon: e.latlng.lng,
        })
      );
    },
  });

  return pickedLocation ? (
    <Marker position={new LatLng(pickedLocation.lat, pickedLocation.lon)}>
      <Popup>Picked Location</Popup>
    </Marker>
  ) : null;
};
