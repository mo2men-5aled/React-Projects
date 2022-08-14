import React from "react";
import ReactDOM from "react-dom";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const DisplaySeason = (prop) => {
  const Season = getSeason(prop.lat, new Date().getMonth());
  console.log(Season);
  return <div>{Season}</div>;
};

export default DisplaySeason;
