const { configDotenv } = require("dotenv");
const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

configDotenv()
const { PORT=8080, URI = "mongodb://localhost:27017" } = process.env
const { dbConn } = require("./db.config.js")

const app = express();
const server = createServer(app);
const ws = new Server(server);
dbConn(URI)

app.use(express.static('public'))
ws.on("connection", (socket) => {
    console.log(`client ${socket.id} connected`);
    socket.on("save", (data) => {
        console.log(data)
    })
    socket.on("load", (data) => {
        console.log(data)
    })
    socket.on("disconnect", () => console.log(`client ${socket.id} disconnected`))
})
server.listen(PORT, () => console.log("service running"))