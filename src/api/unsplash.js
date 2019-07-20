import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 64238cee5e086c90f9c9c4c5e5c97c849c31334d39f09e2b4a9b281e1365ac05"
  }
});
