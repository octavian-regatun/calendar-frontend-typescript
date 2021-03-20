import { CalendarActions, CalendarActionTypes } from "./types";

interface DefaultState {
  month: number;
  year: number;
}

const defaultState: DefaultState = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const calendarReducer = (
  state = defaultState,
  action: CalendarActions
): DefaultState => {
  switch (action.type) {
    case CalendarActionTypes.INCREMENT_MONTH:
      return { ...state, month: action.payload };

    case CalendarActionTypes.DECREMENT_MONTH:
      return { ...state, month: action.payload };

    case CalendarActionTypes.INCREMENT_YEAR:
      return { ...state, year: state.year + 1 };

    case CalendarActionTypes.DECREMENT_YEAR:
      return { ...state, year: state.year - 1 };

    default:
      return state;
  }
};

export default calendarReducer;
