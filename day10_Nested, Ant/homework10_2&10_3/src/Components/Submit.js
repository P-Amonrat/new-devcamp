import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Form } from 'antd';
import InputNameComponents from './InputName';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const SubmitComponent = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>First Name: </p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
      </Form.Item>
    </>
  );

};

export default SubmitComponent;