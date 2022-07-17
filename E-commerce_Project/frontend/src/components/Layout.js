import "./layout.css";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import UserContext from './userContext';

const LayoutComp = () => {
  let { isLogin, setIsLogin, token } = useContext(UserContext);

  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav>
        <ul>
          {!isLogin ? (
            <div>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li style={{ float: "right", marginRight: "5px" }}>
                <Link to="/register">Register</Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="/product_list">Product</Link>
              </li>
              <li style={{ float: "right", marginRight: "5px" }}>
                <Link to="/" onClick={() => {setIsLogin(false); logout();}}>
                  Logout
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayoutComp;
