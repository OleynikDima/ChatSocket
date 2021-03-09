import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthUser, ...routeProps }) => {
  console.log("routeProps", routeProps);
  console.log("isAuthUser", isAuthUser);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthUser ? <Component {...props} /> : <Redirect to="/chat" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthUser: state.auth.token,
});

export default connect(mapStateToProps, null)(PrivateRoute);
