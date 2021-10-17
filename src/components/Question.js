import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    const { optionOneText, user, question } = this.props;

    const { text } = optionOneText;
    const questionPreview = text.slice(0, 10) + "...";
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
              <Link to={`/question/${id}`}>
                <button className="btn">View Poll</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  console.log("id", id);
  const question = questions[id];

  const optionOneText = question.optionOne;
  const optionTwoText = question.optionTwo;

  const user = users[question.author];

  return {
    authedUser,
    optionOneText,
    user,
    question,
  };
}

export default withRouter(connect(mapStateToProps)(Question));
