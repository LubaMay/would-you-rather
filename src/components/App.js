import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                {/* <QuestionPage
                  match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }}
                /> */}
                <Route path="/" exact component={Dashboard} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/question/:id" component={QuestionPage} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
