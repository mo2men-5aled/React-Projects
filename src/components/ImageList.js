import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const photos = props.images.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });
  return <div className="image-list">{photos}</div>;
};

export default ImageList;
