import { Dispatch } from "redux";
import { store } from "../store";
import {
  CalendarActions,
  CalendarActionTypes,
  CalendarDecrementYearAction,
  CalendarIncrementYearAction,
} from "./types";

export const calendarYearIncrement = (): CalendarIncrementYearAction => {
  return { type: CalendarActionTypes.INCREMENT_YEAR };
};

export const calendarYearDecrement = (): CalendarDecrementYearAction => {
  return { type: CalendarActionTypes.DECREMENT_YEAR };
};

export const calendarMonthIncrement = () => (
  dispatch: Dispatch<CalendarActions>
): void => {
  let payload = store.getState().calendar.month;

  if (store.getState().calendar.month === 11) {
    payload = 0;
    dispatch(calendarYearIncrement());
  } else payload += 1;

  dispatch({ type: CalendarActionTypes.INCREMENT_MONTH, payload });
};

export const calendarMonthDecrement = () => (
  dispatch: Dispatch<CalendarActions>
): void => {
  let payload = store.getState().calendar.month;

  if (store.getState().calendar.month === 0) {
    payload = 11;
    dispatch(calendarYearDecrement());
  } else payload -= 1;

  dispatch({ type: CalendarActionTypes.INCREMENT_MONTH, payload });
};
