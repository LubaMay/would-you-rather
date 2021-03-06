import React, { Fragment, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
import NotFound from "./NotFound";

function App(props) {
  useEffect(() => {
    const { dispatch } = props;
    dispatch(handleInitialData());
  });
  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div className="container">
          <NavBar />
          {props.authedUser === null ? (
            <Route path="*" component={SignIn} />
          ) : (
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/question/:id" component={QuestionPage} />
              <Route path="/answers/:id" component={Results} />
              <Route component={NotFound} />
            </Switch>
          )}
        </div>
      </Fragment>
    </Router>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
