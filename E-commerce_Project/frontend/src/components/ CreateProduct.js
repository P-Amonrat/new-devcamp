import "antd/dist/antd.css";
import { Form, Input, Upload, Button } from "antd";
import React, { useState, useContext } from "react";
import  UserContext  from "./userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 13,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

const CreateProduct = () => {
  let navigate = useNavigate();

  let { setIsModalVisibleCreate, data, setData } = useContext(UserContext);

  const onFinish = async (values) => {
    console.log("values", values);
    // console.log(values.user.upload.file.name)
    // console.log(data);
    // const UserData = async (values) => {
        
    // const formData = new FormData();
    // console.log(values);
    // if (values && values.user.upload.file) {
    //     formData.append("product_name", values.user.productname);
    //     formData.append("stock_left", values.user.stockleft);
    //     formData.append("category", values.user.category);
    //     formData.append("image", values.user.upload.file);
    // }

    // console.log(formData);

    // await axios.post("http://localhost:3000/api/create/product", { formData });

      await axios.post("http://localhost:3000/api/create/product", {
        product_name: values.user.productname,
        stock_left: values.user.stockleft,
        category: values.user.category,
        image: values.user.upload
      });

    let GetData = await axios.get("http://localhost:3000/api/product");
    console.log(GetData);
    setData(GetData.data);
    navigate("/product_list");
    // };
    // UserData();
    console.log("done");
  };
  
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e?.fileList;
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

        {/* <Form.Item name={["user", "upload"]} label="Upload">
          <Upload
            action="http://localhost:3000/api/create/product"
            listType="picture"
            beforeUpload={(file) => false}
            getValueFromEvent={normFile}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item> */}

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
