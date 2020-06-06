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

const { TextArea } = Input;
const { TabPane } = Tabs;
function Firstform() {
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
          </Card>
        </TabPane>
        <TabPane key="2" tab="Registration form">
          <div style={{ display: "flex" }}>
            <Card
              title="Registration Your Self Here"
              type="inner"
              style={{
                width: 400,
                margin: "1rem auto",
                border: "1px solid",
              }}
            >
              <Form {...layout} name="Registration" onFinish={onFinish}>
                <Form.Item label="Firstname">
                  <Controller as={Input} name="firstname" control={control} />
                </Form.Item>

                <Form.Item label="Lastname">
                  <Controller as={Input} name="lastname" control={control} />
                </Form.Item>
                <Form.Item label="Address">
                  <Controller as={TextArea} name="address" control={control} />
                </Form.Item>

                <Form.Item label="Gender">
                  <Controller
                    as={<Radio.Group buttonStyle="solid" />}
                    control={control}
                    name="gender"
                    onChange={([event]) => event.target.value}
                  >
                    <Radio.Button value="male">Male</Radio.Button>
                    <Radio.Button value="Female">Female</Radio.Button>
                  </Controller>
                </Form.Item>

                <Form.Item label="Email">
                  <Controller as={Input} name="email" control={control} />
                </Form.Item>
                <Form.Item label="Mobile number">
                  <Controller
                    as={<Input addonBefore="+91" maxLength={10} />}
                    name="pn_number"
                    control={control}
                  ></Controller>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <pre style={{ backgroundColor: "#ffff44" }}>
              {JSON.stringify(watchallfiels, null, 2)}
            </pre>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Firstform;
