import React from 'react';
import 'antd/dist/antd.css';
import { Form, Checkbox } from 'antd';

const AcceptTermComponent = () => {
    return (
        <Form.Item
        name={['accept']}
        valuePropName="checked"
        wrapperCol={{
            offset: 8,
            span: 16,
        }}
        rules={[
            {
                required: true,
            },
        ]}
    >
        <Checkbox>Accept</Checkbox>
    </Form.Item>
    )
}

export default AcceptTermComponent;