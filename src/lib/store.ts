import User from '@/interfaces/user';
import axios from 'axios';
import create from 'zustand';
import { BACKEND_URI } from './constants';
import { fetchUser } from './fetchApi';

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
    const user = (await fetchUser()) as User;
    set({ user: user });
  },
  deleteUser: () => {
    set({ user: undefined });
  },
}));
