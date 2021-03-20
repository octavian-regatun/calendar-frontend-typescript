export enum CalendarActionTypes {
  INCREMENT_MONTH = "CALENDAR_INCREMENT_MONTH",
  DECREMENT_MONTH = "CALENDAR_DECREMENT_MONTH",
  INCREMENT_YEAR = "CALENDAR_INCREMENT_YEAR",
  DECREMENT_YEAR = "CALENDAR_DECREMENT_YEAR",
}

export interface CalendarIncrementMonthAction {
  type: CalendarActionTypes.INCREMENT_MONTH;
  payload: number;
}

export interface CalendarDecrementMonthAction {
  type: CalendarActionTypes.DECREMENT_MONTH;
  payload: number;
}

export interface CalendarIncrementYearAction {
  type: CalendarActionTypes.INCREMENT_YEAR;
}

export interface CalendarDecrementYearAction {
  type: CalendarActionTypes.DECREMENT_YEAR;
}

export type CalendarActions =
  | CalendarIncrementMonthAction
  | CalendarDecrementMonthAction
  | CalendarIncrementYearAction
  | CalendarDecrementYearAction;
