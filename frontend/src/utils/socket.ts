import { io } from "socket.io-client";

const SOCKET_URL = "https://chess-backend-1kz0.onrender.com";

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
