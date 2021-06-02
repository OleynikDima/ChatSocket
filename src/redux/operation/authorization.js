import axios from 'axios';
import authAction from '../action/authorization';
import user from '../action/user';
import userAction from '../action/user';

const URL_BASE_SERVER_SOCKET = 'http://localhost:';
const PORT = '8888';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = data => dispatch => {
  dispatch(authAction.registerRequest());

  console.log(data);
  axios
    .post(URL_BASE_SERVER_SOCKET + PORT + '/api/auth/register', data)
    .then(response => {
      console.log('response', response);
      dispatch(authAction.registerSuccess(response.data));
    })
    .catch(error => dispatch(authAction.registerError(error)));
};

const logIn = data => dispatch => {
  console.log(data);

  dispatch(authAction.loginRequest());

  axios
    .post(URL_BASE_SERVER_SOCKET + PORT + '/api/auth/login', data)
    .then(response => {
      // console.log("response", response);
      token.set(response.data.token);
      if (response.data.message) {
        console.log('error');
        return dispatch(authAction.loginError(response.data));
      }
      console.log(response);
      dispatch(userAction.getUserInfoSuccess(response.data));
      dispatch(authAction.loginSuccess(response.data));
    })
    .catch(error => error);
};

const logOut = ({ name }) => dispatch => {
  dispatch(authAction.logoutRequest());
  console.log(name);
  console.log('logout-2');
  axios
    .post(URL_BASE_SERVER_SOCKET + PORT + '/api/auth/logout', { name })
    .then(response => {
      token.unset();
      dispatch(authAction.logoutSuccess());
      dispatch(user.getUserInfoSuccess(null));
    })
    .catch(error => dispatch(authAction.logoutError(error)));
};

// const getCurrentUser = () => (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   // console.log(persistedToken);
//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(authAction.getCurrentUserRequest());

//   axios
//     .get(URL_BASE_SERVER_SOCKET + PORT + "/users/current")
//     .then(({ data }) => {
//       // console.log(data);
//       dispatch(authAction.getCurrentUserSuccess(data));
//     })
//     .catch((error) => dispatch(authAction.getCurrentUserError(error)));
// };

export default {
  register,
  logIn,
  logOut,
  //   getCurrentUser,
};
