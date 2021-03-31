import { LatLon } from "../../interfaces/latLong.interface";
import { LocationActions, LocationActionTypes } from "./types";

interface DefaultState {
  createEvent: {
    currentLatLon?: LatLon;
    pickedLatLon?: LatLon;
  };
}

const defaultState: DefaultState = {
  createEvent: {
    currentLatLon: undefined,
    pickedLatLon: undefined,
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
          currentLatLon: action.payload,
        },
      };

    case LocationActionTypes.CURRENT_EVENT_SET_PICKED_LOCATION:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          pickedLatLon: action.payload,
        },
      };

    case LocationActionTypes.CURRENT_EVENT_DELETE_PICKED_LOCATION:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          pickedLatLon: undefined,
        },
      };

    default:
      return state;
  }
};

export default locationReducer;
