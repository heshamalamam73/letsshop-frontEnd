const {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_RIGESTER_SUCCESS,
  USER_RIGESTER_FAIL,
  USER_RIGESTER_REQUEST,
} = require("../constants/userActionType");
function userRigesterReducer(state = {}, action) {
  switch (action.type) {
    case USER_RIGESTER_REQUEST:
      return { loading: true };
    case USER_RIGESTER_SUCCESS:
      return { loading: false, data: action.payload };
    case USER_RIGESTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { userSigninReducer, userRigesterReducer };
