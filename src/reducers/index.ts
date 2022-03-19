import { combineReducers } from "redux";
import registerReducer, { RegisterState } from "./register.reducer";
import loginReducer, { LoginState } from "./login.reducer";
import stockReducer, { StockState } from "./stock.reducer";

export default combineReducers({ registerReducer, loginReducer, stockReducer });

export interface RootReducers {
  registerReducer: RegisterState;
  loginReducer: LoginState;
  stockReducer: StockState;
}
