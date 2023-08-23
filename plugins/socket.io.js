import io from "socket.io-client";

// const socket = io("http://localhost:5000");
const socket = io("https://kitchen.up.railway.app");

export default ({ app }, inject) => {
  inject("socket", socket);
};
