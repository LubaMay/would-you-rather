import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";

class LeaderBoard extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;

    const answeredQs = Object.keys(answers).length;
    const createdQs = questions.length;
    const score = answeredQs + createdQs;

    return (
      <div>
        <div className="question">
          <div className="leaderboard-grid">
            <div>
              <img
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className="avatar"
              />
            </div>

            <div>
              <h3>{name}</h3>
              <p>Answered Questions: {answeredQs}</p>
              <p>Created Questions: {createdQs}</p>
            </div>

            <div className="score">
              <span>{score}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const user = users[authedUser];

  return {
    user,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
