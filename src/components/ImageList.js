import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const photos = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  if (props.images.length > 0) {
    return <div className="image-list">{photos}</div>;
  } else {
    return (
      <div>
        <h2 class="ui center aligned icon header">
          <i class="exclamation icon"></i>
          No Images Found
        </h2>
      </div>
    );
  }
};

export default ImageList;
