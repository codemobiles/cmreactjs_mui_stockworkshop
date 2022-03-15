import * as React from "react";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>LoginPage</h1>
      <button onClick={() => navigate("/register")}>Register</button>
    </>
  );
};

export default LoginPage;
