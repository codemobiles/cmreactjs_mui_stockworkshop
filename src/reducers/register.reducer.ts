import {
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
} from "../Constants";

export interface RegisterState {
  isFetching: boolean;
  isError: boolean;
  result: any;
}

const initialState: RegisterState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (
  state = initialState,
  { type, payload }: any
): RegisterState => {
  switch (type) {
    case REGISTER_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case REGISTER_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case REGISTER_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    default:
      return state;
  }
};
