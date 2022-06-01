import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import { createStore, applyMiddleware, Middleware } from "redux";
import thunk from "redux-thunk";
import { Provider, useDispatch } from "react-redux";
import reducers from "./reducers";
import logger from "redux-logger";

let middlewares: Middleware[] = [thunk];

if (process.env.REACT_APP_IS_PRODUCTION != "1") {
  middlewares.push(logger);
}

export const history = createBrowserHistory();
export const store = createStore(reducers, applyMiddleware(...middlewares));

// reference
// https://redux.js.org/usage/usage-with-typescript
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
