import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import { Avatar, Table, } from 'antd';

const columns = [
  {
    title: 'COUSES NAME',
    dataIndex: 'course',
    key: 'course',
  },
  {
    title: 'INSTRUCTURE NAME',
    dataIndex: 'teacher',
    key: 'teacher',
  },
];

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const userData = async () => {
      let response = await axios('/api/users');
      console.log(response);
      let information = response.data.list
      console.log(information)
      await setData(information);
    }
    userData();
  }, [])

  // console.log(data);


  return (
    <Table columns={columns} dataSource={data} pagination={false} />
  )
}

export default App;

