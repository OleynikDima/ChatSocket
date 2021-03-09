import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";

const store = configureStore({
  reducer: {
    auth: "",
    user: userReducer,
  },
});

export default store;
