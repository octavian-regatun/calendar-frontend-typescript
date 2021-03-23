import axios from "axios";
import { Dispatch } from "redux";
import config from "../../config";
import User from "../../interfaces/user.interface";
import { UserActions, UserActionTypes } from "./types";

export const userLoading = (): UserActions => {
  return { type: UserActionTypes.LOADING };
};

export const userGet = () => async (
  dispatch: Dispatch<UserActions>
): Promise<void> => {
  dispatch(userLoading());

  const { data: user } = await axios.get<User>(
    `${config.BACKEND_URI}/api/users`
  );

  dispatch({
    type: UserActionTypes.GET,
    payload: user,
  });
};
