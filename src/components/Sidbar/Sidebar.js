import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { SidebarUpper } from "./sidebarStyle";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const { collapseSidebar } = useProSidebar();
  let history = useNavigate();
  const OnClickUser = () => {
    history("/clients");
  };

  return (
    <div>
      <SidebarUpper>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>PAYCAP</h2>
          </MenuItem>

          <MenuItem
            icon={<PeopleOutlinedIcon onClick={(e) => OnClickUser(e)} />}
          >
            Clients
          </MenuItem>
          <MenuItem icon={<PersonOutlineIcon />} onClick={() => history("/adminusers")}>Admin Users</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Report</MenuItem>
          <MenuItem icon={<SettingsSuggestOutlinedIcon />}>Settings</MenuItem>
          <MenuItem
            icon={<PowerSettingsNewIcon onClick={() => history("/")} />}
          >
            Logout
          </MenuItem>
        </Menu>
      </SidebarUpper>
    </div>
  );
}

export default Sidebar;
