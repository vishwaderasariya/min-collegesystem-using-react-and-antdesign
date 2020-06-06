import React from "react";
import { Rate, Card, notification, Button, Popover, Space } from "antd";
import clg_img from "../college2.jpg";

const openNotification = () => {
  notification.open({
    message: " CURRENT NEWS",
    description:
      "Five days workshop of Front-end Development 11/6/2020 - 15/6/2020.------------Prayer singing compition organised by Music club on 15/06/2020",
  });
};

const names = (
  <div>
    <p>Computer engineering</p>
    <p>Mechanical engineering</p>
    <p>Electrical engineering</p>
    <p>Chemical engineering</p>
    <p>Automobile engineering</p>
  </div>
);
function About() {
  return (
    <div>
      <Card style={{ margin: "1rem auto", width: 800 }}>
        <div>
          <img
            src={clg_img}
            alt="Image of college"
            style={{ width: 700, height: 300 }}
          ></img>
          <h1>About College</h1>
          <p>
            The Bardoli Pradesh Kelavani Mandal (BPKM) is an education trust
            established in 1960 with the aim of imparting of higher education
            opportunities in and around the rural area. BPKM has started a
            self-financed engineering college named as Chhotubhai Gopalbhai
            Patel Institute of Technology (CGPIT) under the roof of Uka Tarsadia
            University (UTU) in the year 2009 with the view of educating and
            training future professionals to lead in today's competitive
            environment and to meet the needs of globalization and industrialism
            by providing dynamic and conductive learning environment.
          </p>
        </div>
        <Card>
          <Space>
            <Button type="primary" onClick={openNotification}>
              COLLEGE NEWS
            </Button>

            <Popover title="Departments" content={names}>
              <Button type="primary">Departments</Button>
            </Popover>
            <h2>Rating</h2>
            <Rate allowHalf defaultValue={4.5}></Rate>
          </Space>
        </Card>
      </Card>
    </div>
  );
}

export default About;
