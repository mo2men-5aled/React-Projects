import "./DisplaySeason.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";
import Spinner from "./Spinner";

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMeassage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (postion) => setLat(postion.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  if (errorMeassage && !lat) {
    return <div>Error: {errorMeassage}</div>;
  }

  if (!errorMeassage && lat) {
    return <DisplaySeason lat={lat} />;
  }
  return <Spinner message="Please accept the location request" />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
