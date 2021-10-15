import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Tabs
          // activeKey={this.key}
          // onSelect={ }
          className="mb-3 question center"
        >
          <Tab eventKey="home" title="Unanswered questions">
            <Questions type="unanswered" />
          </Tab>
          <Tab eventKey="profile" title="Answered Questions">
            <Questions type="answered" />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
