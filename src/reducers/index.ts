import { combineReducers } from "redux";
import registerReducer, { RegisterState } from "./register.reducer";
import loginReducer, { LoginState } from "./login.reducer";

export default combineReducers({ registerReducer, loginReducer });

export interface RootReducers {
  registerReducer: RegisterState;
  loginReducer: LoginState;
}
