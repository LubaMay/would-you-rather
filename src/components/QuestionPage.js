import React, { useState } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'

function QuestionPage(props) {
    const [answer, setAnswer] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
    }

    const onRadioChange = (e) => {
        setAnswer(e.target.value)
    }

    const { optionOneText, optionTwoText, user } = props
    const { name, avatarURL } = user

    return (
        <div className='question'>
            <div>
                <span>{name} asks: </span>
            </div>

            <div className='question-info'>
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div>
                    <h5>Would You Rather...</h5>
                    <form className='vote-form' onSubmit={formSubmit}>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value={optionOneText}
                                    checked={answer === optionOneText}
                                    onChange={onRadioChange}
                                />
                                {optionOneText}
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    value={optionTwoText}
                                    checked={answer === optionTwoText}
                                    onChange={onRadioChange}
                                />
                                {optionTwoText}
                            </label>
                        </div>
                        <button
                            className='btn'
                            type='submit'
                        >Submit</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { id } = props.match.params
    const question = questions[id]
    console.log('this is the question info: ', question)
    const optionOneText = question.optionOne.text
    const optionTwoText = question.optionTwo.text
    const user = users[question.author]
    console.log('this is the author: ', user)
    return {
        id,
        question,
        optionOneText,
        optionTwoText,
        user,
        question: question ? formatQuestion(optionOneText, optionTwoText, user) : null,
    }
}

export default connect(mapStateToProps)(QuestionPage)

