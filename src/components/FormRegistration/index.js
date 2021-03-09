import React from "react";
import "./style.scss";

const FormRegistration = () => {
  return (
    <form className="form_register_user">
      <p> Registration </p>
      <label className="form_register_user__label">
        Name
        <input className="form_register_user__input" />
      </label>
      <label className="form_register_user__label">
        LastName
        <input className="form_register_user__input" />
      </label>
      <label className="form_register_user__label">
        Email
        <input className="form_register_user__input" />
      </label>
      <label className="form_register_user__label">
        Password
        <input className="form_register_user__input" />
      </label>
      <button className="form_register_user__button"> Submit</button>
    </form>
  );
};

export default FormRegistration;
