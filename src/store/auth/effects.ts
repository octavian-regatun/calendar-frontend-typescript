import axios, { AxiosResponse } from "axios";
import config from "../../config";
import AuthResponse from "../../interfaces/authResponse.interface";
import { store } from "../store";
import { authFail, authLoading } from "./actions";

export const getToken = async (
  tokenID: string
): Promise<string | undefined> => {
  try {
    store.dispatch(authLoading());

    const response: AxiosResponse<AuthResponse> = await axios.post(
      `${config.BACKEND_URI}/api/auth/google`,
      { tokenID }
    );

    const { token } = response.data;

    return token;
  } catch (error) {
    // send error to backend logger service
    console.error(error);

    store.dispatch<any>(authFail());
    return undefined;
  }
};
