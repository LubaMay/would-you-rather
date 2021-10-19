import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Results from "./Results";
import Leaderboard from "./Leaderboard";
import NavBar from "./NavBar";
import SignIn from "./SignIn";
import Logout from "./Logout";

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
            <NavBar />
            {this.props.loading === true ? (
              <Route path="/" exact component={SignIn} />
            ) : (
              <div>
                <Route path="/home" component={Dashboard} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/question/:id" component={QuestionPage} />
                <Route path="/results/:id" component={Results} />
                <Route path="/logout" component={Logout} />
                <Redirect exact from="/" to="/home" />
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
