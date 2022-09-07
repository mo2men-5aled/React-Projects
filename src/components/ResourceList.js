import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  //const [property name, setproperty(the setter function)] = useState([the intial value for our property])
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
    console.log(response.data);
  };

  //define and invoke a function inside the useEffect hook without errors
  //   useEffect(() => {
  //     (async (resource) => {
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/${resource}`
  //       );

  //       setResources(response.data);
  //     })(resource);
  //   }, [resource]);

  //useEffect(callback,dependencies)
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  const renderList = () => {
    return resources.map((rec) => {
      return (
        <div className="ui bulleted list">
          <div className="item">{rec.title}</div>
        </div>
      );
    });
  };
  return <div>{renderList()}</div>;
};

export default ResourceList;
