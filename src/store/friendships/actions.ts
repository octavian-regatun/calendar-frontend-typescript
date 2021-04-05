import axios from "axios";
import { Dispatch } from "redux";
import config from "../../config";
import Friendship from "../../interfaces/friendship.interface";
import { store } from "../store";
import { FriendshipsActionTypes, FriendshipsGetAction } from "./types";

const friendshipGetAction = () => async (
  dispatch: Dispatch<FriendshipsGetAction>
): Promise<void> => {
  const { data: friendships } = await axios.get<Friendship[]>(
    `${config.BACKEND_URI}/api/friendships/${store.getState().user.user?._id}`
  );

  dispatch({ type: FriendshipsActionTypes.GET, payload: friendships });
};
