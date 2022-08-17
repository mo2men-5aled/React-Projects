import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9wtXa9NBiR90IWJ8G-bbe_TPC_2CWLN6ELEYvhm06jU",
  },
});
