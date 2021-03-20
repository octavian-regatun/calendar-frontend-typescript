import JwtPayload from "../../interfaces/jwtPayload.interface";

export enum AuthActionTypes {
  LOADING = "AUTH_LOADING",
  SIGN_IN = "AUTH_SIGN_IN",
  LOG_OUT = "AUTH_LOG_OUT",
  FAIL = "AUTH_FAIL",
  UPDATE = "AUTH_UPDATE",
}

export interface AuthLoadingAction {
  type: AuthActionTypes.LOADING;
}

export interface AuthSignInAction {
  type: AuthActionTypes.SIGN_IN;
}

export interface AuthLogOutAction {
  type: AuthActionTypes.LOG_OUT;
}

export interface AuthFailAction {
  type: AuthActionTypes.FAIL;
}

export interface AuthUpdateAction {
  type: AuthActionTypes.UPDATE;
  payload: JwtPayload;
}

export type AuthActions =
  | AuthLoadingAction
  | AuthSignInAction
  | AuthLogOutAction
  | AuthFailAction
  | AuthUpdateAction;
