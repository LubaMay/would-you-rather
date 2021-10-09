export const SAVE_VOTE = 'SAVE_VOTE'


export function saveVote(vote) {
    return {
        type: SAVE_VOTE,
        vote,
    }
}

export function handleSaveAnswer(text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveTweet({
            text,
            author: authedUser,
            replyingTo
        })
            .then((tweet) => dispatch(addTweet(tweet)))
            .then(() => dispatch(hideLoading()))
    }
}