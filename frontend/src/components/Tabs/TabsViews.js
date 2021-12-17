import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import CardCarosoul from "../CardCarosoul/CardCarosoul";
import "./TabsViews.css";
const TabsViews = (props) => {
  return (
    <>
      <div className="TabsContainer">
        <div className="TitleContainer">
          <p>{props.title}</p>
        </div>
        <Tabs
          defaultActiveKey={Object.values(props.routes)[0]}
          id="uncontrolled-tab-example"
        >
          {Object.entries(props.routes).map(([key, value]) => (
            <Tab eventKey={value} title={key} key={value}>
              <CardCarosoul route={value} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default TabsViews;
