import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Questions extends Component {
  render() {
    const { questionList } = this.props;
    console.log("Questions list", questionList);
    return (
      <div>
        {questionList.map((id) => (
          <div key={id}>
            <Question id={id} />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { type }) {
  const currentUser = users[authedUser];
  console.log("current user", currentUser, authedUser);
  const answeredQuestions = Object.keys(currentUser.answers);
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  console.log("IDS", questionIds);

  if (type === "unanswered") {
    const spreaded = [...questionIds];
    console.log("WTF???", spreaded);
    const questionList = spreaded.filter((el) => {
      return !answeredQuestions.includes(el);
    });
    return {
      currentUser,
      questionList,
    };
  } else if (type === "answered") {
    const spreaded = [...questionIds];
    const questionList = spreaded.filter((el) => {
      return answeredQuestions.includes(el);
    });
    return {
      currentUser,
      questionList,
    };
  }
}

export default connect(mapStateToProps)(Questions);
