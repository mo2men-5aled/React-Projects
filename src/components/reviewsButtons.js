import React from "react";
import { Link } from "react-router-dom";
import deleteReview from "./restaurants";

const buttons = (props, review, index) => {
  if (!review) {
    return <div>Loading</div>;
  } else {
    if (review.name === props.user.name && props.user.id === review.user_id) {
      return (
        <div>
          <a
            onClick={() => {
              deleteReview(review._id, index);
            }}
            className="btn btn-primary col-lg-5 mx-1 mb-1"
          >
            Delete
          </a>
          <Link
            to={{
              pathname: "/restaurants/" + props.match.params.id + "/review",
              state: {
                currentReview: review,
              },
            }}
            className="btn btn-primary col-lg-5 mx-1 mb-1"
          >
            Edit
          </Link>
        </div>
      );
    }
  }
};

export default buttons;
