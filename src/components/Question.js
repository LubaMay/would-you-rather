import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    const { optionOneText, isAnswered, user, question, authedUser } =
      this.props;

    const questionPreview = optionOneText.text.slice(0, 10) + "...";
    const { name, avatarURL } = user;
    const { id } = question;
    console.log("question", question);
    return (
      <div className="question">
        <div>
          <div className="results-authorName">
            <span>{name} asks: </span>
          </div>
        </div>

        <div className="board dashboard">
          <div className="leaderboard-grid">
            <div className="leaderboard-img">
              <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className="avatar"
              />
            </div>

            <div className="leaderboard-info">
              <h5>Would You Rather</h5>
              <p>...{questionPreview}</p>
              {isAnswered ? (
                <Link to={`/results/${id}`}>
                  <button className="btn">View Poll</button>
                </Link>
              ) : (
                <Link to={`/question/${id}`}>
                  <button className="btn">View Poll</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  console.log("refresh state questions", questions);
  const optionOneText = question.optionOne;
  const optionTwoText = question.optionTwo;

  const isAnswered =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  const user = users[question.author];

  return {
    authedUser,
    optionOneText,
    isAnswered,
    user,
    question,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
