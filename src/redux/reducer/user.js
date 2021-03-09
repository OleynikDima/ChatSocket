import { createReducer } from "@reduxjs/toolkit";

const getUserInfo = (state, action) => {
  return [...state, action.payload];
};

const userInfo = createReducer([], {});
