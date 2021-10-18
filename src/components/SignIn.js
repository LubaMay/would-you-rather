import React, { useState } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn(props) {
  const [user, setUser] = useState("");

  const { usersList } = props;

  const options = usersList.map((user, id) => {
    return (
      <option key={id} value={user.name}>
        {user.name}
      </option>
    );
  });

  return (
    <div className="sign-form">
      <h3>Welsome to the Would You Rather App!</h3>
      <p>Please sign in to continue</p>
      <img
        src="https://miro.medium.com/max/600/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg"
        alt="react-redux-logo"
        className="logo"
      />

      <Form.Group className="user-form">
        <Form.Label>Sign In</Form.Label>
        <Form.Select
          as="select"
          value={user}
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setUser(e.target.value);
          }}
        >
          <option className="placeholder-user-txt">Select User</option>

          {options}
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </div>
  );
}

function mapStateToProps({ users }) {
  const usersList = Object.values(users);
  console.log("list of users", usersList);
  return {
    usersList,
  };
}

export default connect(mapStateToProps)(SignIn);
