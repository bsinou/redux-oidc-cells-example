import React from "react";
import { connect } from "react-redux";

import userManager from "../redux/userManager";

class PrivatePage extends React.Component {

  onLogout(event) {
    event.preventDefault();
    userManager.removeUser(); // removes the user data from sessionStorage
  }

  render() {
    const { user } = this.props;

    return (
      <div className="App-body">
        <strong>Welcome, {user ? user.profile.name : "Mister Unknown"}!</strong>
        <small>You are now logged in.</small>
        <div className="App-buttons">
          <button onClick={event => { event.preventDefault(); alert(JSON.stringify(this.props.user, null, 2)); }}>Show user info</button>
          <button onClick={this.onLogout}> Logout </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

export default connect(mapStateToProps)(PrivatePage);
