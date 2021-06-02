import actionUser from '../action/user';
import axios from 'axios';

const URL_BASE_SERVER_SOCKET = 'http://localhost:';
const PORT = '8888';

const getUserInfo = ({ id }) => dispatch => {
  dispatch(actionUser.getUserInfoRequest());

  axios
    .post(URL_BASE_SERVER_SOCKET + PORT, { id })
    .then(res => dispatch(actionUser.getUserInfoSuccess(res.data)))
    .catch(error => dispatch(actionUser.getUserInfoError(error)));
};

export default {
  getUserInfo,
};
