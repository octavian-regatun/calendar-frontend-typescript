import Friendship from "../../interfaces/friendship.interface";

export enum FriendshipsActionTypes {
  GET = "FRIENDS_GET",
}

export interface FriendshipsGetAction {
  type: FriendshipsActionTypes.GET;
  payload: Friendship[];
}

export type FriendshipsActions = FriendshipsGetAction;
