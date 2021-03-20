import { AuthActions, AuthActionTypes } from "./types";

interface DefaultState {
  initiated: boolean;
  loading: boolean;
  isAuthenticated: boolean;
}

const defaultState: DefaultState = {
  initiated: false,
  loading: false,
  isAuthenticated: false,
};

const authReducer = (
  state = defaultState,
  action: AuthActions
): DefaultState => {
  switch (action.type) {
    case AuthActionTypes.LOADING:
      return { initiated: true, loading: true, isAuthenticated: false };

    case AuthActionTypes.SIGN_IN:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };

    case AuthActionTypes.LOG_OUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };

    case AuthActionTypes.FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };

    case AuthActionTypes.UPDATE:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default authReducer;
