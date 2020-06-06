import React, { useState } from "react";
import { Button, Input, Card, Form, Radio, Tabs, onFinish } from "antd";
import "antd/dist/antd.css";
function AdminForm() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const currentFacility = { title: title, desc: desc };

  return (
    <div>
      <Form>
        <Form.Item
          label="title"
          name="title"
          rules={[
            {
              required: true,
              message: "This field is required ",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "This field is required ",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            onClick={
              currentFacility.title && currentFacility.desc
                ? () => setData(data.concat(currentFacility))
                : null
            }
            htmlType="submit"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AdminForm;
