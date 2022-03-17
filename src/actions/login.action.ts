import { history } from "../index";
import {
  OK,
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  server,
  TOKEN,
} from "../Constants";
import { User } from "../types/user.type";
import { httpClient } from "../utils/httpclient";
import { LoginResult } from "../types/authen.type";

export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload: LoginResult) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginFailedToState = () => ({
  type: LOGIN_FAILED,
});

export const login = (user: User, navigate: any) => {
  return async (dispatch: any) => {
    try {
      // begin connecting...
      dispatch(setLoginFetchingToState());
      // connect
      const result = await httpClient.post<LoginResult>(server.LOGIN_URL, user);
      if (result.data.result === OK) {
        setTimeout(() => {
          localStorage.setItem(TOKEN, result.data.token!);
          dispatch(setLoginSuccessToState(result.data));
          alert("Login Successfully");
          navigate("/stock");
        }, 1000);
      } else {
        dispatch(setLoginFailedToState());
      }
    } catch (error) {
      // error
      dispatch(setLoginFailedToState());
    }
  };
};

export const restoreLogin = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      dispatch(
        setLoginSuccessToState({
          result: OK,
          token,
          message: "Login successfully",
        })
      );
    }
  };
};
