import { Outlet, Link } from "react-router-dom";

function LayoutComponent() {
    return (
        <div>
            <h2>Menu</h2>
            <nav>
                <ul className="layout">
                    <li className="list"><Link to="/">Home</Link></li>
                    <li className="list"><Link to="/departmentList">Department List</Link></li>
                    <li className="list"><Link to="/employeeList">Employee List</Link></li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>


    );
}

export default LayoutComponent;