import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button } from 'antd';
import './profile.css'
import { changeAge, changeLastname, changeName } from "../profileReducer";

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 6,
  },
};


const Profile = () => {

  const change = useSelector(state => state.profile)
  console.log(change);
  const dispatch = useDispatch()

  const onFinish = (values) => {
    console.log(values.user);
    dispatch(changeName(values.user.firstname));
    dispatch(changeLastname(values.user.lastname));
    dispatch(changeAge(values.user.age));

    document.getElementById("myForm").reset();
  };

  return (
    <>
      <div className="show">
        <p style={{fontSize: "20px", margin: "20px 20px"}}>Hello !! {change.firstname} {change.lastname} : {change.age} years</p>
      </div>

      <Form {...layout} id="myForm" onFinish={onFinish} >
        <Form.Item
          name={['user', 'firstname']}
          label="First Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'lastname']}
          label="Last Name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'age']}
          label="Age"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>

  )
}

export default Profile;