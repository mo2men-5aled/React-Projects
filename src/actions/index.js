import _ from "lodash";
import jsonplaceholder from "../APIs/JsonPlacHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //making an array containing user IDs
  const userIds = _.uniq(_.map(getState().posts, "userId"));

  //iterating over each element inside the array
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

// the first way if preventing overfetching using memoization

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
