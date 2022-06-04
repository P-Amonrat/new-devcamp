import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button } from 'antd';
import React, { useState, useContext } from 'react';
import { Modal } from 'antd';
import { UserContext } from './userContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 13,
    },
};

const validateMessages = {
    required: '${label} is required!',
};

const CreateProduct = () => {
    let navigate = useNavigate();

    let { isModalVisibleCreate, setIsModalVisibleCreate , data , setData } = useContext(UserContext)

    const handleOk = () => {
        setIsModalVisibleCreate(false);
    };

    const handleCancel = () => {
        setIsModalVisibleCreate(false);
    };

    const onFinish = (values  ) => {
        console.log('values', values);
        // console.log(data);
        const UserData = async () => {
            await axios.post('http://localhost:3000/api/product', {
                product_name: values.user.productname,
                stock_left: values.user.stockleft,
                category: values.user.category
            })

            let GetData = await axios.get("http://localhost:3000/api/product")
            console.log(GetData);
            // console.log(GetData.data);
            let old = setData(GetData.data);       
            navigate('/', {state:{values}})
        }
        UserData();
        setIsModalVisibleCreate(false);
        console.log("done")
    };

    return (
        <div>
            <Modal title="New Product" visible={isModalVisibleCreate} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'productname']}
                        label="Product Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'stockleft']}
                        label="Stock Left"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['user', 'category']}
                        label="Category"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Modal >
        </div>
    )
}

export default CreateProduct