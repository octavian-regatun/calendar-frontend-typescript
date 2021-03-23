import { Event } from "../../interfaces/event.interface";
import { EventsActions, EventsActionTypes } from "./types";

interface DefaultState {
  loading: boolean;
  events?: Event[];
}

const defaultState: DefaultState = {
  loading: false,
  events: undefined,
};

const eventsReducer = (
  state = defaultState,
  action: EventsActions
): DefaultState => {
  switch (action.type) {
    case EventsActionTypes.LOADING:
      return { ...state, loading: true };

    case EventsActionTypes.GET:
      return {
        loading: false,
        events: action.payload,
      };
    case EventsActionTypes.FAIL:
      return { loading: false };

    case EventsActionTypes.DELETE:
      return { loading: false, events: action.payload };

    default:
      return state;
  }
};

export default eventsReducer;
