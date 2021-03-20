import axios from "axios";
import { Dispatch } from "redux";
import config from "../../config";
import User from "../../interfaces/user.interface";
import { DataActions, DataActionTypes } from "./types";

export const dataLoading = (): DataActions => {
  return { type: DataActionTypes.USER_LOADING };
};

export const dataUserGet = () => async (
  dispatch: Dispatch<DataActions>
): Promise<void> => {
  dispatch(dataLoading());

  const { data: user } = await axios.get<User>(
    `${config.BACKEND_URI}/api/users`
  );

  dispatch({
    type: DataActionTypes.USER_GET,
    payload: user,
  });
};
