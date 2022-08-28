import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h1>Details for a song</h1>
      <h3>Song Name : {song.name}</h3>
      <h4>Song Duration : {song.duration}</h4>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.SelectedSong };
};
export default connect(mapStateToProps)(SongDetail);
