import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderdList = props.videos.map((video) => {
    return <VideoItem />;
  });
  return <div>{renderdList}</div>;
};

export default VideoList;
