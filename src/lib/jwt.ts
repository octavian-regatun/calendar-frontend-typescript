import JwtPayload from '@/interfaces/jwtPayload';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { BACKEND_URI } from './constants';
import { redirectToError } from './redirect';
import { useUserState } from './store';

export function isJwtExpired(jwt: JwtPayload): boolean {
  const now = Date.now().valueOf() / 1000;

  if (typeof jwt.exp !== 'undefined' && jwt.exp < now) {
    return true;
  }

  return false;
}

export async function setTokenInLocalStorage(
  googleTokenId: string,
): Promise<void> {
  try {
    const { data: token } = await axios.post<string>(
      `${BACKEND_URI}/auth/google`,
      { tokenId: googleTokenId },
    );

    const jwtPayload = jwtDecode<JwtPayload>(token);

    console.log(jwtPayload);

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    localStorage.setItem('token', token as string);

    await useUserState.getState().getUser();
  } catch (error) {
    console.log(error);

    redirectToError('setTokenInLocalStorage error');
  }
}

export function isTokenInLocalStorage(): boolean {
  const token = localStorage.getItem('token');

  if (token) return true;

  return false;
}

export function getJwtPayloadFromToken(): JwtPayload | undefined {
  const token = localStorage.getItem('token');

  if (token) {
    const jwtPayload = jwtDecode<JwtPayload>(token);

    return jwtPayload;
  }

  return undefined;
}
