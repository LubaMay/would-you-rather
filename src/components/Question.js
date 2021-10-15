import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";

class Question extends Component {
  render() {
    const { optionOneText, user } = this.props;
    const { text } = optionOneText;
    const questionPreview = text.slice(0, 10) + "...";
    const { name, avatarURL } = user;
    return (
      <div className="question">
        <div>
          <div className="results-authorName">
            <span>{name} asks: </span>
          </div>
        </div>

        {/* <div className="question-info">
          <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          <div>
            <h5>Would You Rather</h5>
            <p>...{questionPreview}</p>
            <button>View Poll</button>
          </div>
        </div> */}

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
              <button className="poll-btn">View Poll</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  const optionOneText = question.optionOne;
  const optionTwoText = question.optionTwo;
  const user = users[question.author];

  return {
    authedUser,
    optionOneText,
    user,
    question: question
      ? formatQuestion(question, optionOneText, optionTwoText, authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(Question);
