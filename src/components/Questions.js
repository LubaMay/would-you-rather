import React, { Component } from 'react'
import { connect } from 'react-redux'

class Questions extends Component {
    render() {
        const { currentUser, questionList } = this.props
        console.log(currentUser, questionList)
        const { name } = currentUser
        return (
            <div className="center">
                {name}
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