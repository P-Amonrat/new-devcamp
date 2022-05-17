import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import {ShopStock, ProductDetail} from "./Components/ShopStock";
import {Location, LocationDetail} from "./Components/Location";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />  //เป็นหน้าที่แสดง default เรียก element Home มาแสดง
        <Route path="shopStock" element={<ShopStock />} />
        <Route path="shopStock/:id" element={<ProductDetail />} />
        <Route path="location" element={<Location />} />
        <Route path="location/detail" element={<LocationDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>

    <hr />
  </div>
  );
}

export default App;
