import { BookRounded } from "@material-ui/icons";
import { bounds, LatLng, LatLngBounds } from "leaflet";
import { LatLon } from "../../interfaces/latLong.interface";
import { LocationActions, LocationActionTypes } from "./types";

interface DefaultState {
  createEvent: {
    currentLocation?: LatLon;
    pickedLocation?: LatLng;
    location?: string;
  };
}

const defaultState: DefaultState = {
  createEvent: {
    currentLocation: undefined,
    pickedLocation: undefined,
    location: undefined,
  },
};

const locationReducer = (
  state = defaultState,
  action: LocationActions
): DefaultState => {
  switch (action.type) {
    case LocationActionTypes.CURRENT_EVENT_GET_CURRENT_LOCATION:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          currentLocation: action.payload,
        },
      };

    case LocationActionTypes.CURRENT_EVENT_SET_PICKED_LOCATION:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          pickedLocation: action.payload,
        },
      };

    case LocationActionTypes.CURRENT_EVENT_SET_LOCATION:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          location: action.payload,
        },
      };

    default:
      return state;
  }
};

export default locationReducer;
