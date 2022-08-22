import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { name: "Save your tears", duration: "03:30" },
    { name: "Toms Diner", duration: "04:00" },
    { name: "Fe leila", duration: "03:00" },
    { name: "kan lak ma3aya", duration: "46:30" },
    { name: "super power", duration: "02:30" },
    { name: "we fight together", duration: "2:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  Songs: songReducer,
  SelectedSong: selectedSongReducer,
});
