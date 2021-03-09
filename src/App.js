import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
//components
import FormChat from "./components/FormChat";
import FormLogin from "./components/FormLogin";
import Header from "./components/Header";
//style
import "./style/login.css";
import "./style/center.css";
function App() {
  const [infoUser, setInfoUser] = useState();
  return (
    <>
      <Header />
      <hr />
      <div className="login center-site">
        <Switch>
          <Route path="/" exact component={FormLogin} />
          <Route path="/chat" exact component={FormChat} />
        </Switch>
      </div>
    </>
  );
}

export default App;
