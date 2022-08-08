import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

import CommentDetail from "./CommentDetail";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Ali"
          timeAgo="Today at 6:00PM"
          Comment="yeah, that's very good"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Ahmed"
          timeAgo="yasterday at 7:00PM"
          Comment="nice to see you my friend"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Hazem"
          timeAgo="Thursday at 10:00PM"
          Comment="oh my god it is yoiu again"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Hassan"
          timeAgo="Wed at 5:00PM"
          Comment="omaywa mo shindayiro"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
