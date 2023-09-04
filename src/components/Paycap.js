import React from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidbar/Sidebar";
import NavContent from "./Navbar/NavContent";
import { Paycaps } from "./Sidbar/sidebarStyle";
function Paycap(props) {
  const { show, ShowData } = props;
  return (
    <>
      <Paycaps>
        <Sidebar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
          <NavContent />
        </div>
      </Paycaps>
    </>
  );
}

export default Paycap;
