import { Routes, Route, Outlet, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import HomeComponent from "./Components/Home";
import LayoutComponent from "./Components/Layout";
import PortfolioComponent from "./Components/Portfolio";
import AboutUsComponent from "./Components/AboutUs";
import ContactComponent from "./Components/Contact";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomeComponent />} />  //เป็นหน้าที่แสดง default เรียก element Home มาแสดง
          <Route path="portfolio" element={<PortfolioComponent />} />
          <Route path="aboutUs" element={<AboutUsComponent />} />
          <Route path="contact" element={<ContactComponent />} />
        </Route>
      </Routes>

      <hr />
    </div>
  );
}

export default App;
