import User from '@/interfaces/user';
import axios from 'axios';
import { BACKEND_URI } from './constants';
import { redirectToError } from './redirect';

export async function fetchLoggedUser(): Promise<User | undefined> {
  try {
    const { data: user } = await axios.get<User>(`${BACKEND_URI}/users`);

    return user;
  } catch (error) {
    redirectToError("function fetchUser - can't fetch user data");
  }
}

export async function fetchUser(userId: string): Promise<User | undefined> {
  try {
    const { data: user } = await axios.get<User>(
      `${BACKEND_URI}/users/${userId}`,
    );

    return user;
  } catch (error) {
    redirectToError("function fetchUser - can't fetch user data");
  }
}
