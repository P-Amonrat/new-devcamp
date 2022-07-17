import React from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import './box.css';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 9,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 12,
        },
    },
};

const Register = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        axios.post('http://localhost:3000/api/users', {
            username: values.username,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            phone_number: values.phone_number
        })
        document.getElementById('resetForm').reset();
        alert("Successful registration!!")
        navigate('/');
    };

    return (
        <div className='box'>
            <h1 style={{ textAlign: "center", marginTop:"30px", marginBottom:"30px"}}>Register Form</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                id='resetForm'
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="firstname"
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your firstname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lastname"
                    label="Last Name"
                    rules={[
                        {
                            message: 'Please input your lastname!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone_number"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Register;