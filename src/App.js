import React, { useEffect, useState, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
//action
import actionUser from "./redux/action/user";
//route
import routes from "./route/route";
import PrivateRoute from "./route/PrivateRout";
import PublickRouter from "./route/PublickRoute";
//components
import Header from "./components/Header";

//style

const App = ({ getUser }) => {
  const [isUserAlredy, setIsUserAlredy] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // getUser(id);
  });
  return (
    <>
      <Header />
      <hr />
      <div className="login center-site">
        <Suspense fallback={<h1> </h1>}>
          <Switch>
            {routes.map((route) => {
              return route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublickRouter
                  key={route.label}
                  {...route}
                  restricted={route.restricted}
                />
              );
            })}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

const mapStateToProps = () => {};

export default connect(mapStateToProps, null)(App);
