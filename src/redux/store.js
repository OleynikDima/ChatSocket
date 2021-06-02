import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/user';
import authReducer from './reducer/authorization';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
