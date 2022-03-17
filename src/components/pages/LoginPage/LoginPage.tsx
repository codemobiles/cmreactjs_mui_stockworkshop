import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { User } from "../../../types/user.type";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";
import * as loginActions from "../../../actions/login.action";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  const loginReducer = useSelector((state: RootReducers) => state.loginReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const classes: SxProps<Theme> | any = {
    root: { display: "flex", justifyContent: "center" },
    buttons: { marginTop: 2 },
  };

  const showFormV1 = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<User>) => {
    return (
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          value={values.username}
        />
        <br />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          value={values.password}
        />
        <br />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button onClick={() => navigate("/register")}>Register</button>
      </form>
    );
  };

  const showFormV2 = ({
    handleSubmit,
    handleChange,
    isSubmitting,
    values,
  }: FormikProps<User>) => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          onChange={handleChange}
          value={values.password}
          type="password"
        />
        <br />

        {loginReducer.isError && <Alert severity="error">Login failed</Alert>}

        <Stack direction="row" spacing={2} sx={classes.buttons}>
          <Button
            onClick={() => navigate("/register")}
            type="button"
            fullWidth
            variant="outlined"
          >
            Register
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loginReducer.isFetching}
          >
            Login
          </Button>
        </Stack>
      </form>
    );
  };

  const initialValues: User = { username: "", password: "" };
  return (
    <>
      <Box sx={classes.root}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Login
            </Typography>
            <Formik
              onSubmit={(values, {}) => {
                dispatch(loginActions.login(values, navigate));
              }}
              initialValues={initialValues}
            >
              {(props) => showFormV2(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
export default LoginPage;
