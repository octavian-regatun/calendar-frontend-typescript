import Friendship from "../../interfaces/friendship.interface";
import { FriendshipsActions, FriendshipsActionTypes } from "./types";

interface DefaultState {
  friendships?: Friendship[];
}

const defaultState: DefaultState = {
  friendships: undefined,
};

const locationReducer = (state = defaultState, action: FriendshipsActions) => {
  switch (action.type) {
    case FriendshipsActionTypes.GET:
      return action.payload;

    default:
      return state;
  }
};

export default locationReducer;
