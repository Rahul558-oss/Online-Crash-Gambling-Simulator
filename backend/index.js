const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

// Handle user connections
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  // Game logic will go here
});

// Default route for testing
app.get("/", (req, res) => {
  res.send("BoomX Backend is running!");
});

// This is REQUIRED for Render
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
