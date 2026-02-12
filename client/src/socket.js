import { io } from "socket.io-client";

const SOCKET_URL = "http://10.145.10.216:5000/api";

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
});
