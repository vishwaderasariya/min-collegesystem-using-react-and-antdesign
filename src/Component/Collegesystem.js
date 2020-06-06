import React from "react";
import { Tabs } from "antd";
import Firstform from "./Firstform";
import Facility from "./Facility";
import About from "./About";

const { TabPane } = Tabs;

function Collegesystem() {
  return (
    <div style={{ margin: "auto 5rem" }}>
      <Tabs defaultactivekey="1">
        <TabPane key="1" tab="About">
          <About />
        </TabPane>

        <TabPane key="2" tab="Forms">
          <Firstform />
        </TabPane>
        <TabPane key="3" tab="Facilities">
          <Facility />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Collegesystem;
