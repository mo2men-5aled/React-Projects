import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (postion) => console.log(postion),
    (err) => console.log(err)
  );
  return <div></div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
