import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTIONS_ANSWER = 'SAVE_QUESTIONS_ANSWER'

export function saveAnswer(vote) {
    return {
        type: SAVE_QUESTIONS_ANSWER,
        vote,
    }
}

export function handleSaveAnswer(qid, vote) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestionAnswer({
            vote,
            authedUser,
            qid,
        })
            .then((vote) => dispatch(saveAnswer(vote)))
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}