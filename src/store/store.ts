import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import calendarReducer from "./calendar/reducer";
import eventsReducer from "./events/reducer";
import userReducer from "./user/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  calendar: calendarReducer,
  events: eventsReducer,
});

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type Store = ReturnType<typeof rootReducer>;
