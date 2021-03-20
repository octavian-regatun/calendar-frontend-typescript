import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import JwtPayload from "../../interfaces/jwtPayload.interface";
import { authFail, authUpdate } from "../../store/auth/actions";
import { Store } from "../../store/store";

interface Props {
  children: JSX.Element;
}

export const Auth: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state: Store) => state.auth);
  const data = useSelector((state: Store) => state.data);

  function getJwtPayloadFromToken(): JwtPayload | undefined {
    const token = localStorage.getItem("token");

    if (token) {
      const jwtPayload = jwtDecode<JwtPayload>(token);

      return jwtPayload;
    }

    return undefined;
  }

  function isTokenExpired(): boolean {
    const jwtPayload = getJwtPayloadFromToken();

    if (jwtPayload) {
      if (Date.now() >= jwtPayload.exp * 1000) {
        return true;
      }

      return false;
    }
    return true;
  }

  function isTokenInLocalStorage() {
    const token = localStorage.getItem("token");

    if (token) return true;

    return false;
  }

  useEffect(() => {
    if (!isTokenInLocalStorage() || isTokenExpired()) {
      dispatch(authFail());
    } else {
      batch(() => {
        dispatch(authUpdate());
      });
    }
  }, []);

  return auth.initiated && !auth.loading && !data.loadings.user
    ? children
    : null;
};
