import jsonplaceholder from "../APIs/JsonPlacHolder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};
