import React from "react";
import userManager from "../redux/userManager";

class LoginPage extends React.Component {

  onLoginButtonClick(event) {
    event.preventDefault();
    userManager.signinRedirect();
  }

  render() {
    return (
      <div className="App-body">
        <strong>Welcome to the redux-oidc Cells sample app!</strong>
        <small>Please log in to continue.</small>
        <div className="App-buttons">
          <button onClick={this.onLoginButtonClick}>Login with Cells</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
