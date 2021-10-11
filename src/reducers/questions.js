import { RECEIVE_QUESTIONS, SAVE_QUESTIONS_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case SAVE_QUESTIONS_ANSWER:
            return {
                ...state,
                [action.questions.id.answer]: action.answer
            }
        default:
            return state
    }
}