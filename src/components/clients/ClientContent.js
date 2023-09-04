import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { details,getClients } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constant/constants";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import ClientTable from "./ClientTable";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: "seagreen",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        // fontWeight: "700",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "10px",
        paddingRight: "10px",
        ...sx,
      }}
      {...other}
    />
  );
}

function ClientContent() {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const auth = useSelector((state) => state.auth);
  const { token, isAuthenticated, userDetails } = auth;
  const [chart, setChart] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  // const handleClients=()=>{
  //   let config = {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   }
  //   dispatch(getClients(config))
  // }

  // useEffect(()=>{
  //   handleClients()
  // },[])
  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    axios
      .get(BASE_URL + "api/clients/AR", config)
    .then((resp) => {
        console.log(resp);
        if (resp.data.errorMsg === "success") {
          dispatch(
            details({
              userDetails: resp.data.response,
            })
          );
        } else {
          alert(resp.data.response);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const showTable=()=>{
    setOpen(!open)
  }

  return (
    <div>
      {userDetails &&
        userDetails.length > 0 &&
        userDetails.map((items) => {
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
                  <h6> {items.clientId}</h6>
                  <h3>{items.clientName}</h3>
                </Paper>
                <Paper variant="outlined" className={classes.paper}>
                  <h6> {items.clientId}</h6>
                  <h3>{items.clientName}</h3>
                </Paper>
                <Paper variant="outlined" className={classes.paper}>
                  <h6> {items.clientId}</h6>
                  <h3>{items.clientName}</h3>
                </Paper>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  "& > :not(style)": {
                    m: 1,
                    width: 460,
                    height: 430,
                  },
                }}
              >
                <Paper className={classes.paper}>
                  <h1>Excustive</h1>
                  <div style={{ width: "90%", margin: "10px" }}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateRows: "repeat( 1fr)",
                        gap: 1,
                      }}
                    >
                      <Item>
                        <h6>{items.createdBy}</h6>
                        <h6>{items.lastInvoice}</h6>
                      </Item>
                      <Item>
                        <h6>{items.createdBy}</h6>
                        <h6>{items.lastInvoice}</h6>
                      </Item>
                      <Item>
                        <h6>{items.createdBy}</h6>
                        <h6>{items.lastInvoice}</h6>
                      </Item>
                      <Item>
                        <h6>{items.createdBy}</h6>
                        <h6>{items.lastInvoice}</h6>
                      </Item>
                      <Item>
                        <h6>{items.createdBy}</h6>
                        <h6>{items.lastInvoice}</h6>
                      </Item>
                    </Box>
                  </div>
                </Paper>
                <Paper className={classes.paper}>
                  <ReactApexChart
                    options={chart.options}
                    series={chart.series}
                    type="bar"
                    height={350}
                  />
                </Paper>
              </Box>
              <div style={{ maxWidth: "960px" }}>
                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      height: 50,
                    },
                  }}
                >
                  <Paper
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <h5>Employee List Benfit Recapture </h5>
                    <Button variant="contained" color="primary" type="submit" onClick={(e)=>showTable(e)}>
                     {open ? 'hide':'Process Recapture'}
                    </Button>
                  </Paper>
                </Box>
              </div>
               {open &&
              <ClientTable />
               }
              <TableContainer>
                <Table
                  // sx={{ minWidth: 900,  }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">
                        Employee Name
                      </StyledTableCell>
                      <StyledTableCell align="center">YTD</StyledTableCell>
                      <StyledTableCell align="center">
                        Benfits YTD
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Benfits Recapture YTD
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Benfits Variance
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Benfits Recapture
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Deduction YTD
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Deduction Recapture YTD
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Deduction Variance
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Deduction Recapture
                      </StyledTableCell>
                      <StyledTableCell align="center">status</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell
                        component="th"
                        scope="row"
                      ></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          );
        })}
    </div>
  );
}

export default ClientContent;
