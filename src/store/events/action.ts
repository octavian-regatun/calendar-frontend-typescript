import axios from "axios";
import { Dispatch } from "redux";
import config from "../../config";
import { Event } from "../../interfaces/event.interface";
import {
  EventsActions,
  EventsActionTypes,
  EventsFailAction,
  EventsLoadingAction,
} from "./types";

const eventsLoading = (): EventsLoadingAction => {
  return { type: EventsActionTypes.LOADING };
};

const eventsFail = (): EventsFailAction => {
  return { type: EventsActionTypes.FAIL };
};

export const eventsGet = () => async (
  dispatch: Dispatch<EventsActions>
): Promise<void> => {
  dispatch(eventsLoading());

  try {
    const { data: events } = await axios.get<Event[]>(
      `${config.BACKEND_URI}/api/events`
    );

    dispatch({ type: EventsActionTypes.GET, payload: events });
  } catch {
    dispatch(eventsFail());
  }
};

export const eventsDelete = (id: string) => async (
  dispatch: Dispatch<EventsActions>
): Promise<void> => {
  dispatch(eventsLoading());

  const { data: events } = await axios.delete<Event[]>(
    `${config.BACKEND_URI}/api/events/${id}`
  );

  dispatch({ type: EventsActionTypes.DELETE, payload: events });
};
