import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Card, Form, Radio, Tabs } from "antd";
import "antd/dist/antd.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 25,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 10,
  },
};

function LoginForm() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form {...layout} name="login" onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input name="username" />
        </Form.Item>
        <Form.Item
          name="Password"
          label="Password"
          rules={[
            {
              required: true,
              message: "This field is required",
            },
          ]}
        >
          <Input.Password name="password" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button name="submit" type="primary">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
