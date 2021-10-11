import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import Results from './Results'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null :
          //<QuestionPage match={{ params: { id: '8xf0y6ziyjabvozdd253nd' } }} />
          <NewQuestion />
          //<Dashboard />
          //<Results />
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
