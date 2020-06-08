import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Form, Radio, Tabs, onFinish, Card } from "antd";
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
function RegistrationForm() {
  const { watch, control } = useForm();
  const watchallfiels = watch({ nest: true });
  const onFinish = (values) => {
    console.log(values);
  };
  return (
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
      <div style={{ backgroundColor: "blue", margin: "0 20px" }}>
        <pre>{JSON.stringify(watchallfiels, null, 2)}</pre>
      </div>
    </div>
  );
}

export default RegistrationForm;
