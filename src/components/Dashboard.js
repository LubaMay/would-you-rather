import React, { useState } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Dashboard() {
  const [key, setKey] = useState("unanswered");

  return (
    <div>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 question center"
      >
        <Tab eventKey="unanswered" title="Unanswered questions"></Tab>
        <Tab eventKey="answered" title="Answered questions"></Tab>
      </Tabs>
      <Questions type={key} />
    </div>
  );
}

export default connect()(Dashboard);
