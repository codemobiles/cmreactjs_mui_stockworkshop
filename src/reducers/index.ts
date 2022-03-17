import { combineReducers } from "redux";
import registerReducer, { RegisterState } from "./register.reducer";

export default combineReducers({ registerReducer });

export interface RootReducers {
  registerReducer: RegisterState;
}
