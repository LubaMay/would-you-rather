import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

function Question(props) {
  const { optionOneText, isAnswered, user, question } = props;

  const questionPreview = optionOneText.text.slice(0, 10) + "...";
  const { name, avatarURL } = user;
  const { id } = question;
  return (
    <div className="question">
      <div>
        <div className="results-authorName">
          <span>{name} asks: </span>
        </div>
      </div>

      <div className="dashboard">
        <div className="leaderboard-grid home-page">
          <div className="leaderboard-img home-page">
            <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          </div>

          <div className="leaderboard-info home-page">
            <h5>Would You Rather</h5>
            <p>...{questionPreview}</p>
            {isAnswered ? (
              <Link to={`/answers/${id}`}>
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

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
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
