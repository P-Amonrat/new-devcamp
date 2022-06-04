import React from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

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
            offset: 11,
        },
    },
};

const Register = () => {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        axios.post('/api/users', {
            username: values.username,
            password: values.password,
        })
        document.getElementById('resetForm').reset();
        alert("Successful registration!!")
        navigate('/login');
    };

    return (
        <>
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

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Register;