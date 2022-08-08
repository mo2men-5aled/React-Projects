import React from "react";

const ApprovalCard = (prop) => {
  return (
    <div className="ui card">
      <div className="content">{prop.children}</div>
      <div className="extra content">
        <div className="ui twi buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
