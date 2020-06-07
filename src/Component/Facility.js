import React, { useState } from "react";
import {
  Carousel,
  Comment,
  Card,
  Form,
  Input,
  Button,
  BackTop,
  Tabs,
  Row,
  Col,
} from "antd";
import { CommentOutlined } from "@ant-design/icons";
import Library from "../Library.svg";
import Hostel from "../hostel.svg";
import Sports from "../sports.svg";
import Wifi from "../wifi.svg";

const { TextArea } = Input;
const { TabPane } = Tabs;
function Facility() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const currentFacility = { title: title, desc: desc };
  console.log(data);
  return (
    <Tabs tabPosition="left">
      <TabPane key="1" tab="Facilities">
        <Row gutter={6}>
          {data.map((value, index) => (
            <Col span={12} style={{ margin: "6px 0" }}>
              <Card title={value.title}>
                <p>{value.desc}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <Card title="Comments">
          <Comment>
            <Form.Item>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="small" icon={<CommentOutlined />}>
                Add Comment
              </Button>
            </Form.Item>
          </Comment>
          <BackTop></BackTop>
        </Card>
      </TabPane>

      <TabPane key="2" tab="Add Facilities">
        <Card style={{ width: 600, height: 400, margin: "1rem auto" }}>
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
                type="primary"
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </TabPane>
    </Tabs>
  );
}
export default Facility;
