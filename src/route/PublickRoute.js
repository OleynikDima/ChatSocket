import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublickRoute = ({
  component: Component,
  isAuthUser,
  restricted,
  ...routeProps
}) => {
  console.log("routeProps", routeProps);
  console.log("isAuthUser", isAuthUser);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthUser && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthUser: state.auth.token,
});

export default connect(mapStateToProps, null)(PublickRoute);
