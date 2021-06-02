import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actionUser from '../action/user';

const getUserInfo = (state, action) => {
  return action.payload;
};

const userInfo = createReducer(null, {
  [actionUser.getUserInfoSuccess]: getUserInfo,
});

export default combineReducers({
  userInfo,
});
