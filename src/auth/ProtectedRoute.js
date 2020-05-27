import React from "react";
import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(renderProps) => {
        return localStorage.getItem("token") ? (
          <Component {...renderProps} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}
