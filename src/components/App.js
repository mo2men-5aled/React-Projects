import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  //Array destructuring
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <UserList />
      <div>
        <button
          className="ui left attached button"
          onClick={() => {
            setResource("posts");
          }}
        >
          Posts
        </button>
        <button
          className="ui right attached button"
          onClick={() => {
            setResource("todos");
          }}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
