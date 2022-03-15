import * as React from "react";
import { useNavigate } from "react-router-dom";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const [account, setAccount] = React.useState({ username: "", password: "" });
  return (
    <>
      <h1>RegisterPage</h1>

      <form
        onSubmit={(e: React.FormEvent<Element>) => {
          e.preventDefault();
          alert(JSON.stringify(account));
        }}
      >
        <label>Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => {
            console.log(e.target.value);
            setAccount({
              ...account,
              username: e.target.value,
            });
          }}
        />
        <br />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => {
            console.log(e.target.value);
            setAccount({
              ...account,
              password: e.target.value,
            });
          }}
        />
        <br />
        <span>Debug: {JSON.stringify(account)}</span>
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </form>
    </>
  );
};
export default RegisterPage;
