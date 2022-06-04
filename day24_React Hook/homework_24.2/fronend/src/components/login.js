import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './layout.css';
import UserContext from './UserContext';
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {

  let { isModalVisible, setIsModalVisible, isLogin, setIsLogin, token } = useContext(UserContext)
  const navigate = useNavigate()

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    console.log(values);

    try {
      const result = await axios.post('/api/auth/token', {
        username: values.username,
        password: values.password
      }
      )
      console.log(result.data.token);
      setIsLogin(true);
      localStorage.setItem("token", result.data.token)

    }
    catch (e) {
      console.log(e)
    }

  };

  useEffect(() => {
    if (isLogin) {
      console.log("login")
    } else {
      localStorage.removeItem("token")
    }
  }, [isLogin])


  // x? true: false
  return (
    <>
      {!isLogin ?
        <div>
          <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
          <h1 style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}>Login</h1>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 10,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 9,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Modal>
        </div>
        : <div></div>
      }
    </>
  );

};

export default Login;
