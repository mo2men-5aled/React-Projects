import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h1>Details for the song you have chosen</h1>
      <p>Song Name : {song.name}</p>
      <p>Song Duration : {song.duration}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.SelectedSong };
};
export default connect(mapStateToProps)(SongDetail);
