import React, { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { usersList } = this.props;

    return (
      <div className="question leaderboard">
        {usersList.map((id) => {
          const { users } = this.props;
          const { name, avatarURL } = users[id];

          const answeredQs = Object.keys(users[id].answers).length;
          const createdQs = users[id].questions.length;
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

                  <div className="score-shape">
                    <span>{score}</span>
                  </div>
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
  const usersList = Object.keys(users).sort((a, b) => {
    let user1 =
      Object.keys(users[a].answers).length +
      Object.keys(users[a].questions).length;
    let user2 =
      Object.keys(users[b].answers).length +
      Object.keys(users[b].questions).length;

    return user2 - user1;
  });

  return {
    usersList,
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
