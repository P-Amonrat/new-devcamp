import React, { useContext, useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import { Table, Tag, Space, Button } from 'antd';
import { UserContext } from './userContext';
import EditProduct from './EditProduct';
import axios from "axios";
import CreateProduct from './ CreateProduct';
import { Avatar } from 'antd';


const ProductList = () => {
  let { setIsModalVisibleEdit, setIsModalVisibleCreate, data, setData } = useContext(UserContext);
  let navigate = useNavigate();

  const showModalCreate = () => {
    setIsModalVisibleCreate(true);
    console.log("modal")
  };

  const showModalEdit = (id) => {
    setIsModalVisibleEdit(true);
    navigate('/', {state:{id}})
    console.log(id)
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/product/${id}`)
    } catch (e) {
      console.log(e);
    }

    let GetData = await axios.get("http://localhost:3000/api/product")
    setData(GetData.data);

  }


  const columns = [
    {
      title: 'Photo',
      dataIndex: 'photo',
      key: 'photo',
      render: () => <Avatar src={''} />,
    },
    {
      title: 'Product Name',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Stock Left',
      dataIndex: 'stock_left',
      key: 'stock_left',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      key: 'action',
      render: ((_, record) => 
        <div>
          <Button type="primary" onClick={() => showModalEdit(record.id)}>Edit</Button>
          <span style={{ marginLeft: "20px" }}><Button type="primary" danger onClick={() => deleteProduct(record.id)}>Delete</Button> </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} rowKey={(dt) => dt.id} />
      <button
        onClick={showModalCreate}
        style={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          boxShadow: "10px 10px 10px",
          margin: "auto",
          display: "flex",
        }}
      >
        Create New Product
      </button>
      <EditProduct />
      <CreateProduct />
    </>


  )
}

export default ProductList;