import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import React, { useContext, useState } from 'react';
import { Modal } from 'antd';
import { UserContext } from './userContext';
import { useLocation } from "react-router-dom";
import axios from 'axios';

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


const EditProduct = () => {
    const location = useLocation();
    let edit = location.state.id;
    let defaultValue = location.state.values
    // console.log("old", defaultValue);
    // console.log(defaultValue.user.productname)

    let { isModalVisibleEdit, setIsModalVisibleEdit, data, setData } = useContext(UserContext)

    const handleOk = () => {
        setIsModalVisibleEdit(false);
    };

    const handleCancel = () => {
        setIsModalVisibleEdit(false);
    };

    const onFinish = async (values) => {

        console.log(values);
        console.log(edit);
        try {
            let editproduct = await axios.put(`http://localhost:3000/api/product/${edit}`, {
                product_name: values.user.productname,
                stock_left: values.user.stockleft,
                category: values.user.category
            })

            console.log(editproduct)
        } catch (e) {
            console.log(e);
        }

        let GetData = await axios.get("http://localhost:3000/api/product")
        setData(GetData.data);

        setIsModalVisibleEdit(false);
        console.log("done")
    };

    return (
        <div>
            <Modal title="Edit !!" visible={isModalVisibleEdit} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Form {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
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
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal >
        </div>
    )
}

export default EditProduct;