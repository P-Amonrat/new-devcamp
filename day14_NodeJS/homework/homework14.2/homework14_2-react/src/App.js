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
    <>
    <h1 style={{textAlign: "center", margin: "20px"}}>Hello ReqRes Users!</h1>
      <Row >
        {data.map(x => {
          return (
            <Col span={4}>
              <Card>
                <p >{x.first_name}</p>
                <p>{x.email}</p>
                <img src={x.avatar} />
              </Card>
            </Col >
          )
        })}
      </Row>
    </>
  )
}

export default App;



