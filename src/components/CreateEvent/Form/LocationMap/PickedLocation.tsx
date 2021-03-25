import { LatLng } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { locationCurrentEventSetPickedLocation } from "../../../../store/location/action";
import { Store } from "../../../../store/store";

export const PickedLocation: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((store: Store) => store.location);

  const { pickedLocation } = location.createEvent;

  useMapEvents({
    click(e) {
      dispatch(locationCurrentEventSetPickedLocation(e.latlng));
    },
  });

  return pickedLocation ? (
    <Marker position={new LatLng(pickedLocation.lat, pickedLocation.lng)}>
      <Popup>Picked Location</Popup>
    </Marker>
  ) : null;
};
