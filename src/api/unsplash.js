import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GNh0l931hezhme9O79CbYXedeV8cilTCQ1PLsRrCnsg",
  },
});
