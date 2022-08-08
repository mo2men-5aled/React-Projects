import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetail = (prop) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={prop.image} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {prop.author}
        </a>
        <div className="metadata">
          <span className="data">{prop.timeAgo}</span>
        </div>
        <div className="text">{prop.Comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
