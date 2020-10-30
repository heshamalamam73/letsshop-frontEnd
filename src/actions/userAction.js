import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_RIGESTER_REQUEST,
  USER_RIGESTER_SUCCESS,
  USER_RIGESTER_FAIL,
} from "../constants/userActionType";
import Cookie from "js-cookie";
import axios from "axios";
const Rigester = (email, password, name) => async (dispatch) => {
  dispatch({
    type: USER_RIGESTER_REQUEST,
    payload: { email, password, name },
  });
  try {
    const { data } = await axios.post("api/users/rigester", {
      email,
      password,
      name,
    });
    dispatch({ type: USER_RIGESTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_RIGESTER_FAIL, payload: error.message });
  }
};

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userinfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error });
  }
};

export { signin, Rigester };
