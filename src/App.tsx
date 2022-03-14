import React from "react";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <LoginPage />
      <RegisterPage />
    </>
  );
}
