import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';
import StockManagement from './components/stock';
import WaerhouseManagement from './components/waerhouse';
import React, { createContext, useContext, useState } from 'react';
import UserContext from './components/UserContext';
import Layout from './components/layout';


function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isLogin, setIsLogin] = useState(false); //ยังไม่ login
  let token = localStorage.getItem("token")
  console.log(token);

  return (
    <UserContext.Provider value={{isModalVisible,setIsModalVisible, isLogin, setIsLogin, token}}>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<StockManagement />} />
        <Route path="warehouse" element={<WaerhouseManagement />} />
      </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
