import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';


const FormComponent = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const customValidate = (rule, value) => {
        console.log(value);
        if (value === "test") {
            return (Promise.resolve());
        }
        else {
            return (Promise.reject(new Error("ผิดพลาด")));
        }  
    }

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8, //User และ Password
            }}
            wrapperCol={{
                span: 16, // ช่องใส่ข้อความ
            }}
            initialValues={{  //การแสดงเริ่มต้นว่าให้เป็นอะไร
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
                        validator: customValidate,
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
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormComponent;
