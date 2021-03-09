import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authAction from "../action/authorization";

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [authAction.registerSuccess]: (_, { payload }) => payload.user,
  [authAction.loginSuccess]: (_, { payload }) => payload.user,
  [authAction.getCurrentUserSuccess]: (_, { payload }) => payload,
  [authAction.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authAction.registerError]: (_, { payload }) => payload,
  [authAction.loginError]: (_, { payload }) => payload,
  [authAction.logoutError]: (_, { payload }) => payload,
  [authAction.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
