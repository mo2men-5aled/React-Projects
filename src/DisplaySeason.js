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
  const icon = Season === "winter" ? "snowflake" : "sun";
  console.log(Season);
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>
        {Season === "winter" ? "Burr, it is frozen" : "Lets hit the beach"}
      </h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default DisplaySeason;
