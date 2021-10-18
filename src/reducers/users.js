import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, SAVE_QUESTIONS_ANSWER } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      console.log("state", state);
      //console.log("action", action);
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    case SAVE_QUESTIONS_ANSWER:
      // create prebuilt object
      const newAnswer = {};
      newAnswer[action.answer.qid] = action.answer.answer;
      // append to state
      return {
        ...state,
        [action.answer.authedUser]: {
          ...state[action.answer.authedUser],
          answers: Object.assign(
            newAnswer,
            state[action.answer.authedUser].answers
          ),
        },
      };
    default:
      return state;
  }
}
