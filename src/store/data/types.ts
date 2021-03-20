import User from "../../interfaces/user.interface";

export enum DataActionTypes {
  USER_LOADING = "DATA_USER_LOADING",
  USER_GET = "DATA_USER_GET",
  USER_FAIL = "DATA_USER_FAIL",
  USER_REMOVE = "DATA_USER_REMOVE",
}

export interface DataUserLoadingAction {
  type: DataActionTypes.USER_LOADING;
}

export interface DataUserGetAction {
  type: DataActionTypes.USER_GET;
  payload: User;
}

export interface DataUserFailAction {
  type: DataActionTypes.USER_FAIL;
}

export interface DataUserRemoveAction {
  type: DataActionTypes.USER_REMOVE;
}

export type DataActions =
  | DataUserLoadingAction
  | DataUserGetAction
  | DataUserFailAction
  | DataUserRemoveAction;
