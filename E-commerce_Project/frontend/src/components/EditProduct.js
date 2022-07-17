import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import React, { useContext, useState } from "react";
import  UserContext  from "./userContext";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

const EditProduct = () => {
  let { data, setData } = useContext(UserContext);

  const navigate = useNavigate();

  const location = useLocation();
  let information = location.state.record;
  console.log("information", information);

  let param = useParams();
  console.log("param", param);
  let update = param.id;

//   const [form] = Form.useForm();
//   form.setFields({
//     product_name: information.product_name,
//     stock_left: information.stock_left,
//     category: information.category
//   })

  const onFinish = async (values) => {
    console.log(values);
    try {
      let editproduct = await axios.put(
        `http://localhost:3000/api/update/product/${update}`,
        {
          product_name: values.user.productname,
          stock_left: values.user.stockleft,
          category: values.user.category,
        }
      );

      console.log(editproduct);
    } catch (e) {
      console.log(e);
    }

    let GetData = await axios.get("http://localhost:3000/api/product");
    setData(GetData.data);
    navigate('/product_list');

  };

  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "productname"]}
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
          name={["user", "stockleft"]}
          label="Stock Left"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["user", "category"]} label="Category">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
