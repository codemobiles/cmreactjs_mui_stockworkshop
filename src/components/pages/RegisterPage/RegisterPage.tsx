import * as React from "react";
import { useNavigate } from "react-router-dom";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>RegisterPage</h1>
      <button onClick={() => navigate(-1)}>Back</button>

      <form
        onSubmit={(e: React.FormEvent<Element>) => {
          e.preventDefault();
          alert("Register");
        }}
      >
        <label>Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default RegisterPage;
