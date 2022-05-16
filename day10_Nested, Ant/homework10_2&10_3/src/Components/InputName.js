import 'antd/dist/antd.css';
import { Form, Input, Modal } from 'antd';


const InputNameComponents = () => {

    const onChange = e => {
        console.log('Change:', e.target.value);
    };

    return (
        <Form.Item
            name={['user', 'name']}
            label="First Name"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input showCount maxLength={50} onChange={onChange} />
        </Form.Item>

    )
}

export default InputNameComponents;

