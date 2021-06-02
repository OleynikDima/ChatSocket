import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authAction from '../action/authorization';

const initialUserState = {
  name: '',
  email: null,
};

const initialErorrState = {
  error: null,
};
const token = createReducer(null, {
  [authAction.registerSuccess]: (_, { payload }) => payload.token,
  [authAction.loginSuccess]: (_, { payload }) => payload.token,
  [authAction.logoutSuccess]: (state, payload) => {
    return null;
  },
});

const error = createReducer(null, {
  [authAction.registerError]: (_, { payload }) => payload,
  [authAction.loginError]: (_, { payload }) => payload,
  [authAction.logoutError]: (_, { payload }) => payload,
  [authAction.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  // user,
  token,
  error,
});
