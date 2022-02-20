import axios from "axios";

const instance = axios.create({
  baseURL: "https://o1d4ks.sse.codesandbox.io/",
  headers: {
    "content-type": "application/json",
  },
});

export default instance;
