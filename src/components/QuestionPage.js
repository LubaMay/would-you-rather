import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";
import { handleSaveAnswer } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class QuestionPage extends Component {
  state = {
    answer: "",
    toResults: false,
    to404: false,
    userDid404: false,
  };

  onRadioChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      answer: value,
    }));
  };

  formSubmit = (e) => {
    e.preventDefault();

    const { answer } = this.state;
    const { dispatch, id, authedUser } = this.props;

    dispatch(handleSaveAnswer(answer, authedUser, id));

    this.setState(() => ({
      answer: "",
      toResults: id ? true : false,
    }));
  };

  componentWillUnmount() {
    if (
      typeof this.props.optionOneVotes === "undefined" &&
      typeof this.props.optionTwoVotes === "undefined"
    ) {
      const { dispatch } = this.props;
      dispatch(setAuthedUser(null));
      return <Redirect to="/oops" />;
    }
  }

  render() {
    let { answer, toResults, to404 } = this.state;
    const {
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes,
      user,
      id,
      authedUser,
      question,
    } = this.props;

    if (toResults === true) {
      return <Redirect to={`/answers/${id}`} />;
    }

    if (
      typeof optionOneVotes === "undefined" &&
      typeof optionTwoVotes === "undefined"
    ) {
      return <Redirect to="/oops" />;
    }

    const yourVoteForOptOne = optionOneVotes.find(
      (vote) => vote === authedUser
    );
    const yourVoteForOptTwo = optionTwoVotes.find(
      (vote) => vote === authedUser
    );

    if (yourVoteForOptOne || yourVoteForOptTwo) {
      return <Redirect to={`/answers/${id}`} />;
    }
    if (!question || question === null) {
      // If question w  as mapped as null then make 404 flag truthy

      to404 = true;
    }

    if (to404 === true) {
      return <Redirect to="/oops" />;
    }

    const { name, avatarURL } = user;

    return (
      <div className="question">
        <div>
          <span>{name} asks: </span>
        </div>

        <div className="question-info">
          <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          <div>
            <h5>Would You Rather...</h5>
            <form className="vote-form" onSubmit={this.formSubmit}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="optionOne"
                    checked={answer === "optionOne"}
                    onChange={this.onRadioChange}
                  />
                  {optionOneText}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value="optionTwo"
                    checked={answer === "optionTwo"}
                    onChange={this.onRadioChange}
                  />
                  {optionTwoText}
                </label>
              </div>
              <button className="btn" type="submit" disabled={!answer}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  let { id } = props.match.params;
  const question = questions[id];

  if (question) {
    const optionOneText = question.optionOne.text;
    const optionTwoText = question.optionTwo.text;
    const optionOneVotes = question.optionOne.votes;
    const optionTwoVotes = question.optionTwo.votes;
    const user = users[question.author];

    return {
      id,
      question,
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes,
      user,
      users,
      authedUser,
      question: question
        ? formatQuestion(optionOneText, optionTwoText, user)
        : null,
    };
  } else {
    return {
      id,
      question: null,
    };
  }
}

export default connect(mapStateToProps)(QuestionPage);
