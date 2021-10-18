import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "GET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTIONS_ANSWER = "SAVE_QUESTIONS_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const authedUser = getState();
    console.log("USER:", authedUser);
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

export function saveAnswer(answer) {
  console.log("saveAnswer action", answer);
  return {
    type: SAVE_QUESTIONS_ANSWER,
    answer,
  };
}

export function handleSaveAnswer(answer, author, qid) {
  console.log("answer", answer);
  console.log("author", author);
  console.log("qid", qid);
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestionAnswer({
      authedUser: author,
      qid,
      answer,
    }).then(() =>
      dispatch(
        saveAnswer({
          authedUser: author,
          qid,
          answer,
        })
      )
    );
  };
}
