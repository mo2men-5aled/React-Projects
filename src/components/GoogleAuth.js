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
        })
        .then(() => {
          this.auth = window.gapi.auth.getAuthInastance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.state.isSignedIn === true) {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button">
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
