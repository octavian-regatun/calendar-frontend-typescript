import React from "react";
import { Redirect, Route } from "react-router-dom";

interface Props {
  component: JSX.Element;
  condition: boolean;
  redirect: string;
  path: string;
  exact?: boolean;
}

export const ProtectedRoute: React.FC<Props> = ({
  component,
  condition,
  redirect,
  exact,
  path,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (condition ? component : <Redirect to={redirect} />)}
    />
  );
};
