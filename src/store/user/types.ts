import User from "../../interfaces/user.interface";

export enum UserActionTypes {
  LOADING = "USER_LOADING",
  GET = "USER_GET",
  FAIL = "USER_FAIL",
  REMOVE = "USER_REMOVE",
}

export interface UserLoadingAction {
  type: UserActionTypes.LOADING;
}

export interface UserGetAction {
  type: UserActionTypes.GET;
  payload: User;
}

export interface UserFailAction {
  type: UserActionTypes.FAIL;
}

export interface UserRemoveAction {
  type: UserActionTypes.REMOVE;
}

export type UserActions =
  | UserLoadingAction
  | UserGetAction
  | UserFailAction
  | UserRemoveAction;
