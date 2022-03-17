import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { store } from "./../index";

const ProtectedRoutes = (props: any) => {
  const auth = store.getState().loginReducer.result;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
