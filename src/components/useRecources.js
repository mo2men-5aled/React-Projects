import { useState, useEffect } from "react";
import axios from "axios";

const useRecources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
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

  return resources;
};

export default useRecources;
