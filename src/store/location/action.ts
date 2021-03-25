import axios from "axios";
import { LatLng } from "leaflet";
import publicIp from "public-ip";
import { Dispatch } from "redux";
import config from "../../config";
import { LatLon } from "../../interfaces/latLong.interface";
import {
  LocationActions,
  LocationActionTypes,
  LocationCurrentEventSetPickedLocation,
} from "./types";

export const locationCurrentEventSetLocation = (location: {
  name?: string;
  latLng?: LatLng;
}) => async (dispatch: Dispatch<LocationActions>): Promise<void> => {
  if (location.latLng) {
    const { data: locationResponse } = await axios.get<string>(
      `${config.BACKEND_URI}/api/location/reverse-geocode?lat=${location.latLng.lat}&lon=${location.latLng.lng}`
    );

    dispatch({
      type: LocationActionTypes.CURRENT_EVENT_SET_LOCATION,
      payload: locationResponse,
    });
  } else {
    dispatch({
      type: LocationActionTypes.CURRENT_EVENT_SET_LOCATION,
      payload: location.name || "",
    });
  }
};

export const locationCurrentEventGetCurrentLocation = () => async (
  dispatch: Dispatch<any>
): Promise<void> => {
  const ip = await publicIp.v4();

  const { data: latLon } = await axios.get<LatLon>(
    `${config.BACKEND_URI}/api/location/${ip}`
  );

  dispatch({
    type: LocationActionTypes.CURRENT_EVENT_GET_CURRENT_LOCATION,
    payload: latLon,
  });
};

export const locationCurrentEventSetPickedLocation = (latLng: LatLng) => (
  dispatch: Dispatch<any>
): void => {
  dispatch(locationCurrentEventSetLocation({ latLng }));

  dispatch({
    type: LocationActionTypes.CURRENT_EVENT_SET_PICKED_LOCATION,
    payload: latLng,
  });
};
