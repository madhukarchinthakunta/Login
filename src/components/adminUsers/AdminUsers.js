import React from 'react'
import Sidebar from '../Sidbar/Sidebar'
import Navbar from '../Navbar/Navbar'
import { Paycaps } from '../Sidbar/sidebarStyle'
import AdminContent from './AdminContent'
function AdminUsers() {
  return (
    <>
    <Paycaps>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column" }}>
          <Navbar />
          <AdminContent />
        </div>
    </Paycaps>
    </>
  )
}

export default AdminUsers
