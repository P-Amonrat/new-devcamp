import './layout.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import React, { useNavigate, useContext, useEffect, useState } from 'react'
import {UserContext} from './userContext';

const LayoutComp = () => {



    return (
        <div>
            <nav>
                <ul>
                    <li style={{fontSize: "20px"}}><Link to="/">Product List</Link></li>
                    <li style={{float: "right", marginRight: "20px", marginTop: "15px"}}>
                    </li>
                    <li><Link to='/'></Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default LayoutComp;