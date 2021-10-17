import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class Dashboard extends Component {
  state = {
    active: "unanswered",
  };

  handleClick(e) {
    console.log("click", this.state);
    e.preventDefault();
    if (this.state.active === "unanswered") {
      this.setState(() => ({
        active: "answered",
      }));
    } else {
      this.setState(() => ({
        active: "unanswered",
      }));
    }
  }

  render() {
    return (
      <div>
        <Tabs
          // activeKey={this.key}
          onClick={(e) => this.handleClick(e)}
          className="mb-3 question center"
        >
          <Tab eventKey="home" title="Unanswered questions"></Tab>
          <Tab eventKey="profile" title="Answered questions">
            {/* <Questions type="answered" /> */}
          </Tab>
        </Tabs>
        <Questions type={this.state.active} />
      </div>
    );
  }
}

// function mapStateToProps({ questions }) {
//   return {
//     questionIds: Object.keys(questions).sort(
//       (a, b) => questions[b].timestamp - questions[a].timestamp
//     ),
//   };
// }

export default connect()(Dashboard);
