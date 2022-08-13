import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
class App extends React.Component {
  constructor() {
    super();
    this.state = { lat: null, long: null, errorMeassage: "" };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) =>
        this.setState({
          lat: postion.coords.latitude,
          long: postion.coords.longitude,
        }),
      (err) => {
        this.setState({ errorMeassage: err.message });
      }
    );
    return (
      <div>
        <div>Latitude : {this.state.lat}</div>
        <div>longitude: {this.state.long}</div>
        <div>Error: {this.state.errorMeassage}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
