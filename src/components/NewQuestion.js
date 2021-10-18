import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      ...this.state,
      [e.target.name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Option one: ", this.state.optionOne);
    console.log("Option two: ", this.state.optionTwo);

    const { dispatch, id } = this.props;
    dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo, id));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: id ? false : true,
    }));
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;
    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <h3 className="center question bg">Create New Question</h3>
        <form className="new-question question" onSubmit={this.handleSubmit}>
          <p>Complete the question:</p>
          <h3>Would you rather...</h3>
          <input
            placeholder="Enter Option One Text Here"
            type="text"
            name="optionOne"
            value={optionOne}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          <p className="center">OR</p>
          <input
            placeholder="Enter Option Two Text Here"
            type="text"
            name="optionTwo"
            value={optionTwo}
            onChange={this.handleChange}
            className="textarea"
            maxLength={280}
          />
          <button
            className="btn"
            type="submit"
            // disabled={text === ''}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
