import _ from "lodash";
import streams from "../apis/streams";
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      //mapKeys is a function from lodash library that converts array to an objects
      return { ...state, ..._.mapKeys(streams, "id") };

    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
