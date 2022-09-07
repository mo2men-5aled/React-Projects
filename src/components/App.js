import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  //Array destructuring
  const [resource, setResource] = useState("pla pla pla");
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setResource("Posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResource("Todos");
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
