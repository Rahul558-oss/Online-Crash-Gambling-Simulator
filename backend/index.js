const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 10000;

io.on("connection", (socket) => {
  console.log("New connection:", socket.id);
});

app.get("/", (req, res) => {
  res.send("BoomX Backend is working!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
