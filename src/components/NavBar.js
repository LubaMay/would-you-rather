import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          {currentUser !== undefined ? (
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link>Hello, {currentUser.name}</Nav.Link>
                <img
                  src={currentUser.avatarURL}
                  alt={`Avatar of ${currentUser.name}`}
                  className="avatar"
                />
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/logout">
                  Logout
                </Nav.Link>
              </Nav.Item>
            </Nav>
          ) : null}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const currentUser = users[authedUser];
  console.log("CURRENT USER", currentUser);
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(NavBar);
