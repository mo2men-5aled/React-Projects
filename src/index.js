import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
class App extends React.Component {
  constructor() {
    super();
    this.state = { lat: null };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) =>
        this.setState({
          lat: postion.coords.latitude,
          long: postion.coords.longitude,
        }),
      (err) => console.log(err)
    );
    return (
      <div>
        <div>Latitude : {this.state.lat}</div>
        <div>longitude: {this.state.long}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
