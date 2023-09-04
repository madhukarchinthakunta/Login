import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@mui/material/Box";
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

function ClientTable() {
  return (
    <div>
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
                      backgroundColor:"green"
                    }}
                  >
                    <h5>Deduction  Recapture options </h5>
                    
                  </Paper>
                </Box>
              </div>
              <TableContainer>
                <Table
                  // sx={{ minWidth: 900,  }}
                  aria-label="customized table"
                >
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">
                        contained
                      </StyledTableCell>
                      <StyledTableCell align="center">Description</StyledTableCell>
                      <StyledTableCell align="center">
                        YTD
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Excepted YTD
                      </StyledTableCell>
                      <StyledTableCell align="center">
                         Variance
                      </StyledTableCell>
                      <StyledTableCell align="center">
                       Automatic Recapture
                      </StyledTableCell>
                      <StyledTableCell align="center">
                      Recapture Form
                      </StyledTableCell>
                      <StyledTableCell align="center">
                      Recapture Amount
                      </StyledTableCell>
                      <StyledTableCell align="center">
                       The reamaining
                      </StyledTableCell>
                      <StyledTableCell align="center">
                       Include Year Max Limit
                      </StyledTableCell>
                      
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
  )
}

export default ClientTable
