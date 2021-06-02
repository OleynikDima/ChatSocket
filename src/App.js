import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import { useDispatch } from "react-redux";
//action
// import actionUser from "./redux/action/user";
//route
import routes from './route/route';
import PrivateRoute from './route/PrivateRout';
import PublickRouter from './route/PublickRoute';
//components
import Header from './components/Header';

//style

const App = ({}) => {
  //
  return (
    <div>
      <Header />
      {/* <hr /> */}
      <div className="login center-site">
        <Suspense fallback={<h1> </h1>}>
          <Switch>
            {routes.map(route => {
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
    </div>
  );
};

export default connect(null, null)(App);
