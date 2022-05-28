import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import FormComp from './components/form';
import Login from './components/login';
import LayoutComp from './components/layout';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<FormComp />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />

        </Route>
      </Routes>
    </div>

  );
}

export default App;
