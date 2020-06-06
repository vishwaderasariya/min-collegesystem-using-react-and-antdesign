import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Card, Form, Radio, Tabs } from "antd";
import "antd/dist/antd.css";
import LoginForm from "../Forms/LoginForm";
import RegistrationForm from "../Forms/RegistrationForm";
import AdminForm from "../Forms/AdminForm";

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

function FacilityForm() {
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
            <Card
              title="Register Your Self Here"
              type="inner"
              style={{
                width: 400,
                margin: "1rem auto",
                border: "1px solid",
              }}
            >
              <RegistrationForm />
            </Card>
            <pre style={{ backgroundColor: "#C2D4EA" }}>
              {JSON.stringify(watchallfiels, null, 2)}
            </pre>
          </div>
        </TabPane>
        <TabPane key="3" tab="Facilities">
          <AdminForm />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default FacilityForm;
