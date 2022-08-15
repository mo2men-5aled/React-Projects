import React from "react";

const Spinner = (prop) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{prop.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loadeing...",
};

export default Spinner;
