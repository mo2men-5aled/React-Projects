import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "458587909442-6f4lt2mubf4s307mv5i5anbpuqofsg3h.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "Streamy",
        })
        .then(() => {
          this.auth2 = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth2.isSignedIn.get() });
          this.auth2.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth2.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth2.signIn();
  };

  onSignOutClick = () => {
    this.auth2.signOut();
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    }
    if (this.state.isSignedIn === true) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign in with google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
