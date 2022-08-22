import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { name: "Save your tears", duration: "03:30" },
    { name: "Toms Diner", duration: "04:00" },
    { name: "Mirrors", duration: "03:00" },
    { name: "Faded", duration: "4:30" },
    { name: "Super power", duration: "02:30" },
    { name: "We fight together", duration: "2:00" },
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
