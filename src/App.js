import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import FormLogin from "./components/FormLogin";
//style
import "./style/login.css";
import "./style/center.css";
function App() {
  return (
    <div className="login center-site">
      <Switch>
        <Route path="/" component={FormLogin} />
        {/* <Route path="/chat" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
