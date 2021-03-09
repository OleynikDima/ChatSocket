import actionUser from "../action/user";

const getUserInfo = () => (dispatch) => {
  dispatch(actionUser.getUserInfoRequest());
};
