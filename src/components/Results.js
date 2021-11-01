import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";
import { Redirect } from "react-router-dom";
import NotFound from "./NotFound";

class Results extends Component {
  render() {
    const {
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes,
      user,
      users,
      question,
      authedUser,
      questions,
      id,
    } = this.props;
    console.log("AUTHED USER", authedUser, user);

    if (!user) {
      return <Redirect to="/oops" />;
    }
    const totalCount = Object.keys(users).length;

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

    const optionOneVotesRes = percentage(optionOneVotes.length, totalCount);
    const optionTwoVotesRes = percentage(optionTwoVotes.length, totalCount);
    const { name, avatarURL } = user;
    console.log("YOUR VOTE", yourVoteForOptOne, yourVoteForOptTwo);
    if (
      typeof yourVoteForOptOne === "undefined" &&
      typeof yourVoteForOptTwo === "undefined"
    ) {
      return <Redirect to={`/question/${id}`} />;
    }

    if (!Object.keys(questions).includes(question.id)) {
      console.log("OOPS REDIRECTING!!!");
      <Redirect to="/oops" />;
    }

    return (
      <div className="question question-results">
        <div className="results-authorName">
          <span>Asked by {name}</span>
        </div>
        <div className="results-grid">
          <div className="results-author-img">
            <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
          </div>
          <div className="results-side-count">
            <h3 className="results-title">Results:</h3>
            <div className="chart">
              <span className={yourVoteForOptOne ? "your-vote" : "none"}>
                Your <br />
                Vote
              </span>
              <h3>Would you rather {optionOneText}?</h3>
              <div>
                <div id="option-1" className="option">
                  <div className="results">
                    <div
                      className="on"
                      style={{ width: `${optionOneVotesRes}%` }}
                    >
                      <span className="count">
                        <p>{`${optionOneVotesRes}%`}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p>{`${optionOneVotes.length} out of ${totalCount} votes`}</p>
            </div>
            <div className="chart">
              <span className={yourVoteForOptTwo ? "your-vote optTwo" : "none"}>
                Your <br />
                Vote
              </span>
              <h3>Would you rather {optionTwoText}?</h3>
              <div>
                <div id="option-2" className="option">
                  <div className="results">
                    <div
                      className="on"
                      style={{ width: `${optionTwoVotesRes}%` }}
                    >
                      <span className="count">
                        <p>{`${optionTwoVotesRes}%`}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p>{`${optionTwoVotes.length} out of ${totalCount} votes`}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  // console.log("this is the question id: ", question.id);
  if (question) {
    const optionOneText = question.optionOne.text;
    const optionTwoText = question.optionTwo.text;
    const optionOneVotes = question.optionOne.votes;
    const optionTwoVotes = question.optionTwo.votes;
    const user = users[question.author];
    console.log("This is user info", user.id, question);
    return {
      id,
      authedUser,
      question,
      questions,
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes,
      user,
      users,
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

function percentage(votesCount, totalVotes) {
  return Math.floor((100 * votesCount) / totalVotes);
}

export default connect(mapStateToProps)(Results);
