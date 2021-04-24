import Friend from '@/interfaces/friends';
import LatLon from '@/interfaces/latLon';
import User from '@/interfaces/user';
import axios from 'axios';
import create from 'zustand';
import { BACKEND_URI } from './constants';
import { fetchLoggedUser } from './fetchApi';
import { redirectToError } from './redirect';

type AuthState = {
  auth: {
    loading: boolean;
  };
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthState>(set => ({
  auth: {
    loading: false,
  },
  setLoading: loading =>
    set({
      auth: {
        loading: loading,
      },
    }),
}));

type UserState = {
  user: User | undefined;
  getUser: () => Promise<void>;
  updateUser: () => Promise<void>;
  deleteUser: () => void;
};

export const useUserState = create<UserState>(set => ({
  user: undefined,
  getUser: async () => {
    const { data: user } = await axios.get(`${BACKEND_URI}/users`);
    set({ user: user });
  },
  updateUser: async () => {
    const user = (await fetchLoggedUser()) as User;
    set({ user: user });
  },
  deleteUser: () => {
    set({ user: undefined });
  },
}));

type MapState = {
  coordinates: LatLon | undefined;
  updateCoordinates: (coordinates: LatLon | undefined) => void;
};

export const useMapState = create<MapState>(set => ({
  coordinates: undefined,
  updateCoordinates: coordinates => {
    set({ coordinates });
  },
}));

type AddFriendTextFieldState = {
  textField: null | JSX.Element;
  updateTextField: (textField: null | JSX.Element) => void;
};

export const useAddFriendTextFieldState = create<AddFriendTextFieldState>(
  set => ({
    textField: null,
    updateTextField: textField => {
      set({ textField });
    },
  }),
);

type FriendsState = {
  friends: Friend[];
  updateFriends: () => Promise<void>;
  deleteFriend: (id: string) => Promise<void>;
};

export const useFriendsState = create<FriendsState>((set, get) => ({
  friends: [],
  updateFriends: async () => {
    try {
      const { data: friends } = await axios.get<Friend[]>(
        `${BACKEND_URI}/friendships/?status=all`,
      );

      set({ friends });
    } catch (e) {
      console.log(e);
      redirectToError('updateFriendships error');
    }
  },
  deleteFriend: async (id: string) => {
    await axios.delete(`${BACKEND_URI}/friendships/${id}`);
    await get().updateFriends();
  },
}));
