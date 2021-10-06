import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Questions extends Component {
    render() {
        const { questionList } = this.props
        return (
            <div>
                {questionList.map((id) => (
                    <div key={id}>
                        <Question id={id} />
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { type }) {
    const currentUser = users[authedUser]
    const answeredQuestions = Object.keys(currentUser.answers)
    const questionIds = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    if (type === "unanswered") {
        const spreaded = [...questionIds, ...answeredQuestions];
        const questionList = spreaded.filter(el => {
            return !(questionIds.includes(el) && answeredQuestions.includes(el))

        })
        return {
            currentUser,
            questionList
        }

    } else if (type === "answered") {
        const spreaded = [...answeredQuestions];
        const questionList = spreaded.filter(el => {
            return (answeredQuestions.includes(el))
        })
        return {
            currentUser,
            questionList
        }

    }

}

export default connect(mapStateToProps)(Questions)