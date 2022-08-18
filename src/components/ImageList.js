import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const photos = props.images.map((image) => {
    return (
      <div>
        <ImageCard images={image} key={image.id} />
      </div>
    );
  });
  return <div className="image-list">{photos}</div>;
};

export default ImageList;
