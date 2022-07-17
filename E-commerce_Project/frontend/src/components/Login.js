import React, { createContext, useContext } from "react";
import "./box.css";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import  UserContext  from "./userContext";

const Login = () => {
  let { isLogin, setIsLogin, token } = useContext(UserContext);

  const [form] = Form.useForm();
  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const result = await axios.post("http://localhost:3000/api/auth/token", {
        username: values.username,
        password: values.password,
      });
      localStorage.setItem('token', result.data.token);
      setIsLogin(true);
      navigate("/product_list");
    } catch (e) {
      form.setFields([
        {
          name: "username",
          errors: [e.response.data.error],
        },
      ]);
      alert("Username or Password is wrong!!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="box">
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Login
      </h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 9,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 11,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 11,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
