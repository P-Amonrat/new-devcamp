import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select } from 'antd';
const { Option } = Select;

const ProvinceComponent = () => {

    const [form] = Form.useForm();

    return (
        <>
            <Form.Item
                name="address"
                label="Address"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    defaultValue="Bangkok"
                    allowClear
                >
                    <Option value="bangkok">Bangkok</Option>
                    <Option value="saraburi">Saraburi</Option>
                    <Option value="chonburi">Chonburi</Option>
                    <Option value="samutprakran">Samutprakran</Option>
                    <Option value="pathumthanee">Pathumthanee</Option>
                    <Option value="abroad">Abroad</Option>
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.address !== currentValues.address}
            >
                {({ getFieldValue }) =>
                    getFieldValue('address') === 'abroad' ? (
                        <Form.Item
                            name="other"
                            label="Other"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
        </>
    );
}

export default ProvinceComponent;





