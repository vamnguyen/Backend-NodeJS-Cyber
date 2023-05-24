// import lib
const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

// init run app express
const app = express()

// setup static file
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

const server = http.createServer(app)
const io = socketio(server)

// listen event connection from client
io.on("connection", (socket) => {
  console.log('New Client connection')
  // disconnect
  socket.on("disconnect", () => {
    console.log('Client disconnected')
  })
})

const port = 6969
server.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})