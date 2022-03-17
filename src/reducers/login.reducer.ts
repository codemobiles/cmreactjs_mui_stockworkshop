import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../Constants";

export interface LoginState {
  isFetching: boolean;
  isError: boolean;
  result: any;
}

const initialState: LoginState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }: any): LoginState => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case LOGIN_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
