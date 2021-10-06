import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'

class QuestionPage extends Component {
    state = {
        answer: '',
        toResults: false
    }

    onRadioChange = (e) => {
        const value = e.target.value

        this.setState(() => ({
            answer: value,
        }))
    }


    formSubmit = (e) => {
        e.preventDefault()

        const { answer } = this.state
        const { dispatch, id } = this.props

        dispatch(handleSaveAnswer(answer, id))

        this.setState(() => ({
            answer: '',
            toResults: id ? false : true,
        }))

    }

    render() {
        const { answer, toResults } = this.state
        const { optionOneText, optionTwoText, user } = this.props
        const { name, avatarURL } = user

        // if (toResults === true) {
        //     return <Redirect to='/results' />
        // }

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
                        <form className='vote-form' onSubmit={this.formSubmit}>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value={optionOneText}
                                        checked={answer === optionOneText}
                                        onChange={this.onRadioChange}
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
                                        onChange={this.onRadioChange}
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

