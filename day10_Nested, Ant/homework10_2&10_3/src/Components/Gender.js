import React from 'react';
import 'antd/dist/antd.css';
import { Radio, Form } from 'antd';


const GenderComponent = () => {

    return (
        <Form.Item
            name="gender"
            label="Gender"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
            </Radio.Group>
        </Form.Item>

    )
}

export default GenderComponent;



