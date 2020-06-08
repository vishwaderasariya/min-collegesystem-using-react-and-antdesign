import React from "react";
import { useForm } from "react-hook-form";
import { Card, Tabs } from "antd";
import "antd/dist/antd.css";
import LoginForm from "../Forms/LoginForm";
import RegistrationForm from "../Forms/RegistrationForm";

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

const { TabPane } = Tabs;

function Form() {
  const { watch, control } = useForm();
  const watchallfiels = watch({ nest: true });
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Tabs tabPosition="left">
        <TabPane key="1" tab="Login form">
          <Card style={{ width: 500, margin: "1rem auto" }}>
            <LoginForm />
          </Card>
        </TabPane>
        <TabPane key="2" tab="Registration form">
          <div style={{ display: "flex" }}>
            <RegistrationForm />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Form;
