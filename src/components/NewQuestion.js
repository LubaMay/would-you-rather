import React, { Component } from 'react'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        const value = e.target.value

        this.setState(() => ({
            ...this.state,
            [e.target.name]: value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log('Option one: ', this.state.optionOne)
        console.log('Option two: ', this.state.optionTwo)

        //const { dispatch, id } = this.props
        //dispatch(handleAddQuestion(this.state.optionOne, id))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
        }))
    }

    render() {
        const { optionOne, optionTwo } = this.state
        return (
            <div>
                <h3 className='center'>Create New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <p>Would you rather...</p>
                    <input
                        placeholder="Enter Option One Text Here"
                        type='text'
                        name='optionOne'
                        value={optionOne}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    <span>OR</span>
                    <input
                        placeholder="Enter Option Two Text Here"
                        type='text'
                        name='optionTwo'
                        value={optionTwo}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                    />
                    <button
                        className='btn'
                        type='submit'
                    // disabled={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default NewQuestion