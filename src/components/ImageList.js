import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const photos = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{photos}</div>;
};

export default ImageList;
