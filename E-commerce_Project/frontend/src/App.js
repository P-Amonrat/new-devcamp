import "./App.css";
import LayoutComp from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import UserContextProvider from "./components/userContext";
import UserContext from "./components/userContext";
import ProductList from "./components/ProductList";
import EditProduct from "./components/EditProduct";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateProduct from "./components/ CreateProduct";
import React, { useState, useEffect } from 'react'

function App() {

  const [isLogin, setIsLogin] = useState(false); //ยังไม่ login
  let token = localStorage.getItem("token")

  const [data, setData] = useState([]);
  useEffect(() => {
    const userData = async () => {
      let response = await axios('/api/product');
      console.log(response);
      let information = response.data
      console.log(information)
      setData(information);
    }
    userData();
  }, [])

  return (
    <div>
      {/* <UserContextProvider> */}
      <UserContext.Provider value={{data, setData, isLogin, setIsLogin, token}}>
        <Routes>
          <Route path="/" element={<LayoutComp />}>
          {!isLogin ? (
          <Route>
          <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
            ) : (
              <Route>
              <Route path="product_list" element={<ProductList />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="update/:id" element={<EditProduct />} />
              </Route>

          )}
          </Route>
        </Routes>
        </UserContext.Provider>
      {/* </UserContextProvider> */}
    </div>
  );
}

export default App;
