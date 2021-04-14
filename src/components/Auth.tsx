import JwtPayload from '@/interfaces/jwtPayload';
import {
  getJwtPayloadFromToken,
  isJwtExpired,
  isTokenInLocalStorage,
} from '@/lib/jwt';
import { useUserState } from '@/lib/store';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Auth = ({ children }: Props): JSX.Element | null => {
  const [initiated, setInitiated] = useState(false);

  const updateUser = useUserState(state => state.updateUser);

  useEffect(() => {
    (async () => {
      if (isTokenInLocalStorage()) {
        const jwt = getJwtPayloadFromToken() as JwtPayload;
        if (!isJwtExpired(jwt)) {
          const token = localStorage.getItem('token') as string;

          axios.defaults.headers.common.Authorization = `Bearer ${token}`;

          await updateUser();
          setInitiated(true);
        } else setInitiated(true);
      } else setInitiated(true);
    })();
  }, [updateUser]);

  return initiated ? <>{children}</> : null;
};

export default Auth;
