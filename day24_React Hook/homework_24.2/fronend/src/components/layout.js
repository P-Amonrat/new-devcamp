import React, { useState, useContext } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './layout.css';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

const Layout = () => {

    let { isModalVisible, setIsModalVisible, isLogin, setIsLogin, token } = useContext(UserContext)
    const navigate = useNavigate()

    const showModal = () => {
        setIsModalVisible(true);
      };

    const logout = () => {
        localStorage.removeItem("token")
        navigate('/');
    }

    return (
        <div>
            <nav>
                <ul>
                {!isLogin
                ? <div>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/login" onClick={showModal}>Login</Link></li>
                    <li style={{float:"right"}}><Link to="/register">Register</Link></li>
                  </div>  
                :
                  <div><li><Link to="/stock">Stock Management</Link></li>
                    <li ><Link to="/warehouse">warehouse Management</Link></li>
                    <li ><Link to="/" onClick={() => {setIsLogin(false); logout();}} >Logout</Link></li>
                 </div>
                }  
                </ul>
            </nav>
            <Outlet />

            
           
        
        </div>
    )
}

export default Layout;