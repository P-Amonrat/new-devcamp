import "./App.css";
import LayoutComp from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "./components/userContext";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateProduct from "./components/ CreateProduct";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<LayoutComp />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product_list" element={<ProductList />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/update/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
