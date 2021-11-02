import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class NavBar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };

  render() {
    const { currentUser } = this.props;
    return (
      <nav className="nav">
        {currentUser !== undefined ? (
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
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

            <li className="login-user-info">
              <div>
                <div className="login-img">
                  <img
                    src={currentUser.avatarURL}
                    alt={`Avatar of ${currentUser.name}`}
                    className="avatar login"
                  />
                </div>
                <span>Hello, {currentUser.name}</span>
              </div>
            </li>

            <li>
              <button className="btn" onClick={(e) => this.handleLogout(e)}>
                Logout
              </button>
            </li>
          </ul>
        ) : null}
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  const currentUser = users[authedUser];
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(NavBar);
