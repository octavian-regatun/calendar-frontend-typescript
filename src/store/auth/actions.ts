import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "redux";
import JwtPayload from "../../interfaces/jwtPayload.interface";
import { dataUserGet } from "../data/action";
import { getToken } from "./effects";
import { AuthActions, AuthActionTypes } from "./types";

export const authLoading = (): AuthActions => {
  delete axios.defaults.headers.common.Authorization;
  return { type: AuthActionTypes.LOADING };
};

export const authFail = () => (dispatch: Dispatch<AuthActions>): void => {
  dispatch(authLoading());

  delete axios.defaults.headers.common.Authorization;

  dispatch({ type: AuthActionTypes.FAIL });
};

export const authSignIn = (tokenID: string) => async (
  dispatch: Dispatch<any>
): Promise<void> => {
  const token = await getToken(tokenID);

  if (!token) {
    dispatch(authFail());
  } else {
    const jwtPayload = jwtDecode<JwtPayload>(token);

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    localStorage.setItem("token", token);

    dispatch(dataUserGet());

    dispatch({
      type: AuthActionTypes.SIGN_IN,
      payload: jwtPayload,
    });
  }
};

export const authUpdate = () => (dispatch: Dispatch<any>): void => {
  dispatch(authLoading());

  const token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  dispatch(dataUserGet());

  dispatch({ type: AuthActionTypes.UPDATE });
};
