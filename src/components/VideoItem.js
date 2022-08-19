import React from "react";
import "./videoitem.css";

const VideoItem = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(videos)}>
      <img
        className="ui image"
        src={videos.snippet.thumbnails.medium.url}
        href="www.google.com"
      />
      <div className="content">
        <div className="header">{videos.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
