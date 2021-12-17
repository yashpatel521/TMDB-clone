import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import CardCarosoul from "../CardCarosoul/CardCarosoul";
import "./TabsViews.css";
const TabsViews = (props) => {
  return (
    <div className={props.className}>
      <div className="TabsContainer ">
        <div className="TitleContainer">
          <p>{props.title}</p>
        </div>
        <Tabs
          defaultActiveKey={Object.values(props.routes)[0].key}
          id="uncontrolled-tab-example"
        >
          {Object.entries(props.routes).map(([key, value]) => (
            <Tab eventKey={value.key} title={key} key={value.key}>
              <CardCarosoul route={value.url} params={value.type} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabsViews;
