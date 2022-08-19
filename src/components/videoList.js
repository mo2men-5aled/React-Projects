import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderdList = props.videos.map((video) => {
    return <VideoItem videos={video} />;
  });
  return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideoList;
