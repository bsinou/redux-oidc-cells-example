import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";

import userManager from "../redux/userManager";

class CallbackPage extends React.Component {
  render() {
    // console.log('About to render callback component')

    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={() => {
          console.log("Sucess!")
          this.props.history.push('/');
        }}
        errorCallback={error => {
          console.log("Could not perform OAuth flow:", error);
          this.props.history.push('/');
        }}
      >
        <div>Back on callback page...</div>
      </CallbackComponent>
    );
  }
}

export default connect()(CallbackPage);
