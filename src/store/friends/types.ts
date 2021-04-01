export enum FriendsActionTypes {
  GET = "FRIENDS_GET",
}

export interface FriendsGetAction {
  type: FriendsActionTypes.GET;
}

export type FriendsActions = FriendsGetAction;
