import axios from "axios";
import { Dispatch } from "redux";
import { getJwtPayloadFromToken } from "../../components/Auth/Auth";
import config from "../../config";
import User from "../../interfaces/user.interface";
import { store } from "../store";
import { UserActions, UserActionTypes } from "./types";

export const userLoading = (): UserActions => {
  return { type: UserActionTypes.LOADING };
};

export const userGet = () => async (
  dispatch: Dispatch<UserActions>
): Promise<void> => {
  dispatch(userLoading());

  const { data: user } = await axios.get<User>(
    `${config.BACKEND_URI}/api/users/${getJwtPayloadFromToken()?.id}`
  );

  dispatch({
    type: UserActionTypes.GET,
    payload: user,
  });
};
