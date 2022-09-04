import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      //mapKeys is a function from lodash library that converts array to an objects

      //action.payload is the data returned from the database
      //action's payload in the actions file is (response.data)
      //response.data contain all the data in the object streams in the database file
      return { ...state, ..._.mapKeys(action.payload, "id") };

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
