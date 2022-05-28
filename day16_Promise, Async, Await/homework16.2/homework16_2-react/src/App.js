import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Table, } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'First Name',
    dataIndex: 'First Name',
    key: 'First Name',
  },
  {
    title: 'Last Name',
    dataIndex: 'Last Name',
    key: 'Last Name',
  },
  {
    title: 'Avatar',
    dataIndex: 'Avatar',
    key: 'Avatar',
    render: (Avatar) => (
      <img src={Avatar} />
    )
  },
];

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const userData = async () => {
      let response = await axios('/api/users');
      console.log(response);
      let information = response.data.users
      console.log(information)
      await setData(information);
    }
    userData();
  }, [])

  // console.log(data);


  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default App;



