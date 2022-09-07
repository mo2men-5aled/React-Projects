import React from "react";
import useRecources from "./useRecources";

const ResourceList = ({ resource }) => {
  const resources = useRecources(resource);
  //const [property name, setproperty(the setter function)] = useState([the intial value for our property])

  return resources.map((rec) => {
    return (
      <div className="ui bulleted list">
        <div className="item">{rec.title}</div>
      </div>
    );
  });
};

export default ResourceList;
