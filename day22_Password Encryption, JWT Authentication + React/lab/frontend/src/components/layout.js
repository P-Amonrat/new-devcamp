import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }

  export default Layout;