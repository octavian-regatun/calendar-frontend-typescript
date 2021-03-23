import User from "../../interfaces/user.interface";
import { UserActions, UserActionTypes } from "./types";

interface DefaultState {
  loading: boolean;
  user?: User;
}

const defaultState: DefaultState = {
  loading: false,
};

const userReducer = (
  state = defaultState,
  action: UserActions
): DefaultState => {
  switch (action.type) {
    case UserActionTypes.LOADING:
      return { loading: true };

    case UserActionTypes.GET:
      return {
        loading: false,
        user: action.payload,
      };
    case UserActionTypes.FAIL:
      return { loading: false };

    case UserActionTypes.REMOVE:
      return { loading: false };

    default:
      return state;
  }
};

export default userReducer;
