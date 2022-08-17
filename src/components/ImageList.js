import React from "react";

const ImageList = (props) => {
  const photos = props.images.map((image) => {
    return <img src={image.urls.regular} />;
  });
  return <div>{photos}</div>;
};

export default ImageList;
