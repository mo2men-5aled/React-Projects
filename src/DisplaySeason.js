import React from "react";
const seasonConfig = {
  summer: { text: "let's hit hte beach", icon: "sun" },
  winter: { text: "Burr, it is frozen", icon: "snowflake" },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const DisplaySeason = (prop) => {
  const Season = getSeason(prop.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[Season];
  return (
    <div>
      <i className={`left-icon massive  ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`right-icon massive  ${icon} icon`} />
    </div>
  );
};

export default DisplaySeason;
