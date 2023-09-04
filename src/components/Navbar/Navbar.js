import { Toolbar, CssBaseline, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import NavContent from "./NavContent";
import { AppBarNav, Searchbar } from "./NavbarStyle";
import ClientContent from "../clients/ClientContent";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function Navbar(props) {
  const { show } = props;
  return (
    <>
      <div>
        <AppBarNav position="static">
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4">Client List</Typography>
            <Searchbar>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Searchbar>
            <IconButton size="large" color="inherit">
              {" "}
              <WidgetsOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              {" "}
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBarNav>
        {/* {show && <NavContent />} 
        {!show && <ClientContent />}  */}
      </div>
    </>
  );
}
export default Navbar;
