import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/authSlice";
import axios from "axios";
import { BASE_URL } from "../../constant/constants";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: "center",
      color: "seagreen",
    },
  }));

function NavContent() {
  const classes = useStyles();
  let dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { token, isAuthenticated, data } = auth;
  useEffect(() => {
    console.log(auth);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(BASE_URL + "api/clients/TR", config)
      .then((resp) => {
        if (resp.data.errorMsg === "success") {
          dispatch(
            getData({
              data: resp.data.response,
            })
          );
        } else {
          alert(resp.data.response);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div style={{display:"flex",flexDirection:'column'}}>
      
      {data &&
        data.length > 0 &&
        data.map((user) => {
          return (
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 300,
                  height: 300,
                },
              }}
            >
              <Paper variant="outlined" className={classes.paper}>
                <h6> {user.clientId}</h6>
                <h3>{user.clientName}</h3>
                <h3>{user.recaptureType}</h3>
              </Paper>
              <Paper variant="outlined" className={classes.paper}>
                <h6> {user.clientId}</h6>
                <h3>{user.clientName}</h3>
                <h3>{user.recaptureType}</h3>
              </Paper>
              <Paper variant="outlined" className={classes.paper}>
                <h6> {user.clientId}</h6>
                <h3>{user.clientName}</h3>
                <h3>{user.recaptureType}</h3>
              </Paper>
            </Box>
          );
        })}
    </div>
  );
}

export default NavContent;
