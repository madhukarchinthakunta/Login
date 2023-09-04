import React from "react";
import Paper from "@material-ui/core/Paper";
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

function AdminContent() {
    const classes = useStyles();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 150,
          },
        }}
      >
       
        
        <Paper variant="outlined" className={classes.paper}>
        <Paper style={{backgroundColor:"orange", color:"white",width:"50px"}}>$</Paper>
        </Paper>
        <Paper variant="outlined" className={classes.paper}>
        <Paper style={{backgroundColor:"gold", color:"white",width:"50px"}}>$</Paper>
        </Paper>
        <Paper variant="outlined" className={classes.paper}>
        <Paper style={{backgroundColor:"green", color:"white",width:"50px"}}>$</Paper>
        </Paper>
       
      </Box>

      <Paper variant="outlined" >

       <div style={{display: "flex",justifyContent:"space-between"}}>
          <h6>Employee Benfit Life Cycle</h6>
          <h6>year</h6>
          <h4>hhh</h4>
          </div>
      </Paper>
    </div>
  );
}

export default AdminContent;
