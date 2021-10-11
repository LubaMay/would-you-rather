import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTIONS_ANSWER = 'SAVE_QUESTIONS_ANSWER'

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const authedUser = getState()
        console.log('USER:', authedUser)
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser.authedUser,
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}

export function saveAnswer(answer) {
    return {
        type: SAVE_QUESTIONS_ANSWER,
        answer,
    }
}

export function handleSaveAnswer(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestionAnswer({
            answer,
            authedUser,
            qid,
        })
            .then((answer) => dispatch(saveAnswer(answer)))
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}