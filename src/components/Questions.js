import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Question from "./Question";

function Questions(props) {
  const { questionList } = props;
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

Questions.propTypes = {
  questionList: PropTypes.array,
};

mapStateToProps.propTypes = {
  authedUser: PropTypes.string,
  users: PropTypes.array,
  questions: PropTypes.array,
};

export default connect(mapStateToProps)(Questions);
