import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((songs) => {
      return (
        <div className="item">
          <div className="right floated content">
            <button className="ui button">Select</button>
          </div>
          <div className="content">{songs.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
