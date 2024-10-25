const { configDotenv } = require("dotenv");
const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

configDotenv()
const { PORT=8080 } = process.env

const app = express();
const server = createServer(app);
const ws = new Server(server);

app.use(express.static('public'))
ws.on("connection", (socket) => {
    console.log(`client ${socket.id} connected`);

    socket.on("disconnect", () => console.log(`client ${socket.id} disconnected`))
})
server.listen(PORT, () => console.log("service running"))