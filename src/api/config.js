import axios from "axios";

const instance = axios.create({
  baseURL: "https://61ffcacf5e1c4100174f6f70.mockapi.io/",
  headers: {
    "content-type": "application/json",
  },
});

export default instance;
