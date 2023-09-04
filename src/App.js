import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Paycap from './components/Paycap';
import Clients from './components/clients/Clients'
import AdminUsers from './components/adminUsers/AdminUsers';
import {Routes,Route} from "react-router-dom"
function App() {
  
    return (
      <>
      <div>
       <Routes>
        <Route  path='/' element={<LoginForm  />}></Route>
        <Route  path="/dashboard" element={<Paycap />}></Route>
        <Route  path="/clients" element={<Clients />}></Route>
        <Route  path="/adminusers" element={<AdminUsers />}></Route>
      </Routes>
      </div>
      
      </>
    );
  }
  
  export default App;
