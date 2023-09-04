import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Login } from "./LoginStyle";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, login, jwtToken } from "../../redux/authSlice";
import { BASE_URL } from "../../constant/constants";
import axios from "axios";
const LoginForm = (props) => {
  const [emailL, setEmailL] = useState("");
  const [passwordL, setPasswordL] = useState("");
  let history = useNavigate();
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  let dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { user, isAuthenticated } = auth;
  const { ShowData } = props

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!passwordL || !emailL) {
      setError("Please Enter All Inputs Field");
    } else {

      axios
        .post(
          BASE_URL +
          "api/auth/generate-otp?email=" +
          emailL +
          "&password=" +
          passwordL
        )
        .then((res) => {
          // console.log(state);
          dispatch(
            login({
              email: emailL,
              isAuthenticated: true,
              token: null,
            })
          );
        })
        .catch((err) => {
          console.log(err);
          dispatch(
            login({
              email: emailL,
              token: null,
              isAuthenticated: false,
            })
          );
        });

      dispatch(
        setCredentials({
          email: emailL,
          password: passwordL,
        })
      );
      setError("");
      setAuthenticated(true);
    }
  };

  const handleSubmitOtp = (e) => {
    axios
      .post(BASE_URL + "api/auth/validate-otp?email=" + user + "&otp=" + otp)
      .then((res) => {
        if (res.data.errorMsg === "success") {
          dispatch(
            jwtToken({
              email: emailL,
              token: res.data.response,
              isAuthenticated: true,
            })
          );
          history("/dashboard");

        } else {
          alert(res.data.response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Login>
        <div>
          <h2>Login Here </h2>
          {error && <h3 style={{ color: "red" }}>{error}</h3>}
        </div>

        <Grid
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
        >
          {/* <form noValidate autoComplete="off" onSubmit={handleSumbit}> */}
          {!isAuthenticated ? (
            <div>
              <Grid>
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="outlined"
                  value={emailL}
                  type="text"
                  onChange={(e) => setEmailL(e.target.value)}
                  name="email"
                />
              </Grid>
              <Grid>
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="outlined"
                  value={passwordL}
                  type="password"
                  onChange={(e) => setPasswordL(e.target.value)}
                  name="password"
                />
              </Grid>
              <Button
                variant="contained"
                color="primary"
                type="button"
                float="left"
                onClick={(e) => handleSumbit(e)}
              >
                Login
              </Button>
            </div>
          ) : (
            <div>
              <Grid>
                <TextField
                  id="standard-basic"
                  label="OTP"
                  variant="outlined"
                  value={otp}
                  type="number"
                  onChange={(e) => handleOtpChange(e)}
                  name="otp"
                />
              </Grid>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                float="left"
                onClick={(e) => handleSubmitOtp(e)}
              >
                Login
              </Button>
            </div>
          )}
          {/* </form> */}
        </Grid>
      </Login>
    </>
  );
};

export default LoginForm;
