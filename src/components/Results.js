import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/_DATA";

class Results extends Component {
  render() {
    const {
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes,
      user,
      users,
      votes,
    } = this.props;
    const totalCount = Object.keys(users).length;

    const optionOneVotesRes = percentage(optionOneVotes.length, totalCount);
    const optionTwoVotesRes = percentage(optionTwoVotes.length, totalCount);
    const { name } = user;
    return (
      <div className="question">
        <div>
          <span>Asked by {name}</span>
        </div>
        <h3>Results:</h3>
        <div>
          <h3>Would you rather {optionOneText}?</h3>
          <div class="chart">
            <div id="option-1" class="option">
              <div class="results">
                <div class="on" style={{ width: `${optionOneVotesRes}%` }}>
                  <span class="count">
                    <p>{`${optionOneVotesRes}%`}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p>{`${optionOneVotes.length} out of ${totalCount} votes`}</p>
        </div>

        <div>
          <h3>Would you rather {optionTwoText}?</h3>
          <div class="chart">
            <div id="option-1" class="option">
              <div class="results">
                <div class="on" style={{ width: `${optionTwoVotesRes}%` }}>
                  <span class="count">
                    <p>{`${optionTwoVotesRes}%`}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p>{`${optionTwoVotes.length} out of ${totalCount} votes`}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  console.log("this is the question info: ", question);
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
    question: question
      ? formatQuestion(optionOneText, optionTwoText, user)
      : null,
  };
}

function percentage(votesCount, totalVotes) {
  return Math.floor((100 * votesCount) / totalVotes);
}

export default connect(mapStateToProps)(Results);
