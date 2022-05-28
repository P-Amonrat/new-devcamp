import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const FormComponent = () => {
    const onFinish = (values) => {
        console.log(values.user.id_card);
        axios.post('http://localhost:5000/users/data', {
            id_card: values.user.id_card,
            first_name: values.user.first_name,
            last_name: values.user.last_name,
            phone_number: values.user.phone_number,
            email: values.user.email,
            address: values.user.address,
            tumbol: values.user.tumbol,
            ampher: values.user.ampher,
            province: values.user.province,
            postal: values.user.postal
        })

        axios.post('http://localhost:5000/users/experience', {
            company_name: values.user.company_name,
            company_address: values.user.company_address,
            duration: values.user.duration,
            position: values.user.position,
        })
        document.getElementById('resetForm').reset();
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
        id = "resetForm"
        >
            <Form.Item
                name={['user', 'id_card']}
                label="ID Card"
               
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'first_name']}
                label="First Name"
                
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'last_name']}
                label="Last Name"
                
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'phone_number']}
                label="Phone Number"
               
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
               
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'adress']}
                label="Adress"
                
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'tumbol']}
                label="Tumbol"
               
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'ampher']}
                label="Ampher"
                
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'province']}
                label="Province"
             
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'postal']}
                label="Postal"
                
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'company_name']}
                label="Company Name"
               
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'company_address']}
                label="Company Address"
              
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'duration']}
                label="Duration"
              
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'position']}
                label="Position"
               
            >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
                <Button type="primary" htmlType="submit" style={{marginBottom: "30px"}}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormComponent;



