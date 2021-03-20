import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import calendarReducer from "./calendar/reducer";
import dataReducer from "./data/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  calendar: calendarReducer,
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
