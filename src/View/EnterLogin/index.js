import React from "react";
//componets
import FormLogin from "../../components/FormLogin";
//style
import "../../style/login.css";
import "../../style/center.css";

export const EnterLogin = () => {
  return (
    <>
      <div className="login center-site">
        <FormLogin />
      </div>
    </>
  );
};

export default EnterLogin;
