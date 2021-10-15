import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";

class Leaderboard extends Component {
  render() {
    const { usersList } = this.props;

    return (
      <div className="question leaderboard">
        {usersList.map((user, id) => {
          const { name, avatarURL, answers, questions } = user;

          const answeredQs = Object.keys(answers).length;
          const createdQs = questions.length;
          const score = answeredQs + createdQs;

          return (
            <div className="board" key={id}>
              <div className="leaderboard-grid">
                <div className="leaderboard-img">
                  <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className="avatar"
                  />
                </div>

                <div className="leaderboard-info">
                  <h3>{name}</h3>
                  <p>Answered Questions: {answeredQs}</p>
                  <hr />
                  <p>Created Questions: {createdQs}</p>
                </div>

                <div className="score">
                  <p>Score</p>
                  <p>
                    <span className="score-shape">{score}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const usersList = Object.values(users);

  return {
    usersList,
  };
}

export default connect(mapStateToProps)(Leaderboard);
