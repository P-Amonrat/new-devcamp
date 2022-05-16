// import { Table } from 'antd';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function App() {
//   const columns = [
//     {
//       title: 'Avatar',
//       dataIndex: 'avatar',
//       key: 'avatar',
//       render: (t, x) => <img src={x.avatar} />,
//     },
//     {
//       title: 'First Name',
//       dataIndex: 'first_name',
//       key: 'First Name',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//   ];
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get('/api/users').then((result) => {
//       setData(result.data);
//     });
//   }, []);
//   return <Table dataSource={data} columns={columns} pagination={false} />;
// }

// export default App;


import axios from 'axios';
import { Card, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/api/users').then((result) => {
      setData(result.data);
    });
  }, []);
  console.log(data)

  return (
    data.map(x =>
      <div className="site-card-wrapper">
        <Row >
          <Col span={4}>
            <Card style={{justifyItems: "center"}}>
              <p >{x.first_name}</p>
              <p>{x.email}</p>
              <img src={x.avatar} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  )
}

export default App;



