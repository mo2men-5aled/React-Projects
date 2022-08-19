import React from "react";

const VideoItem = (props) => {
  return (
    <div className="item">
      <img
        className="ui image"
        src={props.videos.snippet.thumbnails.medium.url}
        href="www.google.com"
      />
      <div className="content">
        <div className="header">{props.videos.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
