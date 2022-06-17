import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Table, Tag, Space, Button } from "antd";
import { UserContext } from "./userContext";
import axios from "axios";
import CreateProduct from "./ CreateProduct";
import { Avatar } from "antd";
import "./productList.css";
import jwt_decode from 'jwt-decode';

const ProductList = () => {
  let { data, setData, token } = useContext(UserContext);

  let navigate = useNavigate();

  const [ username, setUsername ] = useState();

  useEffect(() => {
    localStorage.getItem('token');

    if(token) {
      const decode = jwt_decode(token);
      console.log(decode);
      const username = decode.username;
      setUsername(username);
    }
  }, []);

  const createProduct = () => {
    navigate('/create');
  }

  const updateProduct = (record) => {
    console.log(record);
    navigate(`/update/${record.id}`, { state: { record } });
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/delete/product/${id}`);
    } catch (e) {
      console.log(e);
    }

    let GetData = await axios.get("http://localhost:3000/api/product");
    setData(GetData.data);
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: () => <Avatar src={""} />,
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Stock Left",
      dataIndex: "stock_left",
      key: "stock_left",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>
          <Button type="primary" onClick={() => updateProduct(record)}>
            Edit
          </Button>
          <span style={{ marginLeft: "20px" }}>
            <Button
              type="primary"
              danger
              onClick={() => deleteProduct(record.id)}
            >
              Delete
            </Button>{" "}
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <p className="welcome">Welcome!! {username}</p>
      <div className="productList">
        <Table columns={columns} dataSource={data} rowKey={(dt) => dt.id} />
      </div>
      <button
        onClick={createProduct}
        style={{
          margin: "auto",
          display: "flex",
        }}
      >
        Create
      </button>
    </div>
  );
};

export default ProductList;
