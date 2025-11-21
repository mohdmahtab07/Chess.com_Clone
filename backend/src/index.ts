import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { GameManager } from "./GameManager";
import cors from "cors";

const app = express();
const server = createServer(app);

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(express.json());

const gameManager = new GameManager();

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  gameManager.addUser(socket);

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    gameManager.removeUser(socket);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Chess server is running!" });
});

app.get("/analytics", (req, res) => {
  const analytics = gameManager.getAnalytics();
  res.json(analytics);
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
