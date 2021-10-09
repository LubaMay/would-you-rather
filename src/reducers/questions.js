import { RECEIVE_QUESTIONS, SAVE_QUESTIONS_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTIONS_ANSWER:
            return {
                ...state,
                [action.questions.id.votes]: action.vote
            }
        default:
            return state
    }
}