import 'antd/dist/antd.css';
import { InputNumber, Form } from 'antd';


const InputNumberComponent = () => {

  const ageValidate = (rule, value) => {
    console.log(value);
    if (value < 18) {
      return(Promise.reject(new Error("You are too young!!")));
    }
    else if (value > 60 && value <= 99) {
      return(Promise.reject(new Error("You are too old!!")));
    }
    
    else if (value > 99) {
      return (Promise.reject(new Error("error!!")));
    }
    else {
      return (Promise.resolve());
    }
  }

  return (
    <Form.Item
      name={['user', 'age']}
      label="Age"
      rules={[
        {
          validator: ageValidate,
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

  )
}

export default InputNumberComponent;

