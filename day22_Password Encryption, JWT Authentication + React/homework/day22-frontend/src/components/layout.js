import React from 'react';
import 'antd/dist/antd.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './layout.css';


const LayoutComp = () => {
    return (
        <div>
            <nav>
                <ul className='myList'>
                    <li className='list'><Link to="/">Register</Link></li>
                    <li className='list'><Link to="/login">Login</Link></li>
                    <li className='list'><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default LayoutComp;



