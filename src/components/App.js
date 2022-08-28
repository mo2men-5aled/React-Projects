import React from "react";
import SongList from "./songList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row" style={{ marginTop: "10px" }}>
        <div className="column eight wide">
          <SongList />
        </div>
        <div
          className="column eight wide"
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
          }}
        >
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
