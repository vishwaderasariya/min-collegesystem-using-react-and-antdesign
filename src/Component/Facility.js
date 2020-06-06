import React from "react";
import { Carousel, Comment, Card, Form, Input, Button, BackTop } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import Library from "../Library.svg";
import Hostel from "../hostel.svg";
import Sports from "../sports.svg";
import Wifi from "../wifi.svg";

const { TextArea } = Input;
function Facility() {
  return (
    <div>
      <Card
        title="Facilities we provide"
        style={{ width: 900, margin: "1rem auto", backgroundColor: "#B8E9FF" }}
      >
        <Carousel autoplay={true} dotPosition="bottom">
          <div>
            <img
              src={Library}
              alt="Library Logo"
              style={{ height: 400, width: 1000 }}
            ></img>
          </div>
          <div>
            <img
              src={Hostel}
              alt="Hostel Logo"
              style={{ height: 400, width: 1000 }}
            ></img>
          </div>
          <div>
            <img
              src={Sports}
              alt="Sports Logo"
              style={{ height: 400, width: 1000 }}
            ></img>
          </div>
          <div>
            <img
              src={Wifi}
              alt="Wifi Logo"
              style={{ height: 400, width: 1000 }}
            ></img>
          </div>
        </Carousel>

        <h3>Library:</h3>
        <p>
          The University has a central library which is open for students and
          staff members.
        </p>
        <h3>Hostel:</h3>
        <p>
          Hostel facility is available within the campus for boys and girls.
        </p>
        <h3>Sports:</h3>
        <p>
          Many Types Sports facility is available within the campus for boys and
          girls.
        </p>
        <h3>wifi:</h3>
        <p>Full Campus Wi-Fi facility is available.</p>
      </Card>
      <Card title="Comments" style={{ width: 900, margin: "1rem auto" }}>
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
    </div>
  );
}
export default Facility;
