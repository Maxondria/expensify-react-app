import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={RouteProps => {
      return isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...RouteProps} />
      );
    }}
  />
);

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: !!auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
