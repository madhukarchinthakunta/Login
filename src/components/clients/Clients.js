import React from 'react'
import Sidebar from '../Sidbar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Paycaps } from '../Sidbar/sidebarStyle'
import ClientContent from './ClientContent'

function Clients() {
  return (
    <>
    <Paycaps>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
          <ClientContent />
        </div>
    </Paycaps>
    </>
  )
}

export default Clients
