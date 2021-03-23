import { Event } from "../../interfaces/event.interface";

export enum EventsActionTypes {
  LOADING = "EVENTS_LOADING",
  GET = "EVENTS_GET",
  FAIL = "EVENTS_FAIL",
  DELETE = "EVENTS_DELETE",
}

export interface EventsLoadingAction {
  type: EventsActionTypes.LOADING;
}

export interface EventsGetAction {
  type: EventsActionTypes.GET;
  payload: Event[];
}

export interface EventsFailAction {
  type: EventsActionTypes.FAIL;
}

export interface EventsRemoveAction {
  type: EventsActionTypes.DELETE;
  payload: Event[];
}

export type EventsActions =
  | EventsLoadingAction
  | EventsGetAction
  | EventsFailAction
  | EventsRemoveAction;
