import User from "../../interfaces/user.interface";
import { DataActions, DataActionTypes } from "./types";

interface Loadings {
  user: boolean;
}

interface DefaultState {
  loadings: Loadings;
  user?: User;
}

const defaultState: DefaultState = {
  loadings: {
    user: false,
  },
};

const dataReducer = (
  state = defaultState,
  action: DataActions
): DefaultState => {
  switch (action.type) {
    case DataActionTypes.USER_LOADING:
      return { loadings: { ...state.loadings, user: true } };

    case DataActionTypes.USER_GET:
      return {
        loadings: { ...state.loadings, user: false },
        user: action.payload,
      };
    case DataActionTypes.USER_FAIL:
      return { loadings: { ...state.loadings, user: false } };

    case DataActionTypes.USER_REMOVE:
      return { loadings: { ...state.loadings, user: false } };

    default:
      return state;
  }
};

export default dataReducer;
