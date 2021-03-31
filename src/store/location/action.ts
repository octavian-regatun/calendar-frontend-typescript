import axios from "axios";
import { LatLng } from "leaflet";
import publicIp from "public-ip";
import { Dispatch } from "redux";
import config from "../../config";
import { LatLon } from "../../interfaces/latLong.interface";
import {
  LocationActions,
  LocationActionTypes,
  LocationCurrentEventDeletePickedLocation,
  LocationCurrentEventSetPickedLocation,
} from "./types";

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

export const locationCurrentEventSetPickedLocation = (
  latLon: LatLon
): LocationCurrentEventSetPickedLocation => {
  return {
    type: LocationActionTypes.CURRENT_EVENT_SET_PICKED_LOCATION,
    payload: latLon,
  };
};

export const locationCurrentEventDeletePickedLocation = (): LocationCurrentEventDeletePickedLocation => {
  return {
    type: LocationActionTypes.CURRENT_EVENT_DELETE_PICKED_LOCATION,
  };
};
