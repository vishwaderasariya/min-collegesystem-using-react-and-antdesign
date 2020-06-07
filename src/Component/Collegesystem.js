import React from "react";
import { Tabs } from "antd";
import FacilityForm from "./FacilityForm";
import Facility from "./Facility";
import About from "./About";

const { TabPane } = Tabs;

function CollegeSystem() {
  return (
    <div style={{ margin: "auto 5rem" }}>
      <Tabs defaultactivekey="1">
        <TabPane key="1" tab="About">
          <About />
        </TabPane>

        <TabPane key="2" tab="Forms">
          <FacilityForm />
        </TabPane>
        <TabPane key="3" tab="Facilities">
          <Facility />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default CollegeSystem;
