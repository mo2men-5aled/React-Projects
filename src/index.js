import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => console.log(postion),
      (err) => console.log(err)
    );
    return <div> Latitude :</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
