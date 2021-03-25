import { LatLng, LatLngBounds } from "leaflet";
import { LatLon } from "../../interfaces/latLong.interface";

export enum LocationActionTypes {
  CURRENT_EVENT_GET_CURRENT_LOCATION = "LOCATION_CURRENT_EVENT_GET_CURRENT_LOCATION",
  CURRENT_EVENT_SET_PICKED_LOCATION = "LOCATION_CURRENT_EVENT_SET_PICKED_LOCATION",
  CURRENT_EVENT_SET_LOCATION = "LOCATION_CURRENT_EVENT_SET_LOCATION",
}

export interface LocationCurrentEventGetCurrentLocation {
  type: LocationActionTypes.CURRENT_EVENT_GET_CURRENT_LOCATION;
  payload: LatLon;
}

export interface LocationCurrentEventSetPickedLocation {
  type: LocationActionTypes.CURRENT_EVENT_SET_PICKED_LOCATION;
  payload: LatLng;
}

export interface LocationCurrentEventSetLocation {
  type: LocationActionTypes.CURRENT_EVENT_SET_LOCATION;
  payload: string;
}

export type LocationActions =
  | LocationCurrentEventGetCurrentLocation
  | LocationCurrentEventSetPickedLocation
  | LocationCurrentEventSetLocation;
