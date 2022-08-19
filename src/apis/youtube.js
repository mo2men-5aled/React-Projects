import axios from "axios";

const KEY = "AIzaSyBkTv - Q5SX - GFWf46SBhkKcF1B2zl_FH3E";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
