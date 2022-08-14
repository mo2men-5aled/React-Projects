import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
class App extends React.Component {
  state = { lat: null, long: null, errorMeassage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => {
        this.setState({
          lat: postion.coords.latitude,
          long: postion.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errorMeassage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMeassage && !(this.state.lat && this.state.long)) {
      return <div>Error: {this.state.errorMeassage}</div>;
    }

    if (!this.state.errorMeassage && this.state.lat && this.state.long) {
      return <DisplaySeason lat={this.state.lat} />;
    }
    return <div>Please wait :^I </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
