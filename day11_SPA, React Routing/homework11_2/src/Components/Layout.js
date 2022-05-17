import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import './Layout.css';

function Layout() {
    return (
        <div>
            <nav>
                <ul className="layout">
                    <li className="list"><Link to="/">Home</Link></li>
                    <li className="list"><Link to="/shopStock">Shop Stock</Link></li>
                    <li className="list"><Link to="/location">Warehouse Location</Link></li>
                    <li className="list"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default Layout;