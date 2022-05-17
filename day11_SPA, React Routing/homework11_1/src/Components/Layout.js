import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import './Layout.css';

function LayoutComponent() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default LayoutComponent;