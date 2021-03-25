import { LatLng } from "leaflet";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { locationCurrentEventGetCurrentLocation } from "../../../../store/location/action";
import { Store } from "../../../../store/store";

let shouldLocate = true;

export const ChangeLocation: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((store: Store) => store.location);

  const map = useMap();

  useEffect(() => {
    dispatch(locationCurrentEventGetCurrentLocation());
  }, []);

  if (location.createEvent.currentLocation && shouldLocate) {
    map.setView(
      new LatLng(
        location.createEvent.currentLocation.lat,
        location.createEvent.currentLocation.lon
      ),
      12
    );

    shouldLocate = false;
  }

  return null;
};
