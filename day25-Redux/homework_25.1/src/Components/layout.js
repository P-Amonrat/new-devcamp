import React from 'react';
import 'antd/dist/antd.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './layout.css';

const LayoutComp = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to ="/">Profile</Link></li>
                    <li><Link to ="/card">Card</Link></li>
                    <li><Link to ="/product">Product List</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
  }

export default LayoutComp;